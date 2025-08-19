import React, { useEffect } from "react";
import { useState } from "react";
import SuggestionsList from "./SuggestionsList";
import { useDebounce } from "../../hooks/useDebounce";

const Autocomplete = ({
  staticData,
  placeholder = "",
  fetchSuggestions,
  dataKey = "",
  customLoading,
  onSelect = () => {},
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  customStyles = {},
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedInput = useDebounce(inputValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const getSuggestions = async () => {
    setLoading(true);
    setError(null);
    try {
      let result;
      if (staticData.length > 0) {
        result = staticData.filter((item) => {
          return item.name.toLowercase().includes(item.toLowercase());
        });
      } else {
        result = await fetchSuggestions(debouncedInput);
        if (dataKey && result[dataKey]) {
          result = result[dataKey];
        }
      }
      setSuggestions(result);
    } catch (error) {
      setError("Failed to fetch suggestions");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      getSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
    return () => {};
  }, [debouncedInput]);

  const handleSuggestionClick = (selectedSuggestion) => {
    onSelect(selectedSuggestion);
    setInputValue(selectedSuggestion.name);
    setSuggestions([]);
    setLoading(false);
    setError(null);
  };

  const shouldShowDropdown =
    inputValue.length > 0 && (loading || suggestions.length > 0 || error);

  return (
    <div className="relative w-64">
      <input
        className="w-full border border-gray-300 rounded px-3 py-2"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {shouldShowDropdown && (
        <ul className="absolute left-0 top-full mt-1 w-full border border-gray-300 bg-white rounded shadow-lg max-h-60 overflow-y-auto z-10">
          {error ? (
            <li className="px-4 py-2 text-red-600">{error}</li>
          ) : loading ? (
            <li className="px-4 py-2 text-gray-500">
              {customLoading || "Loading..."}
            </li>
          ) : (
            <SuggestionsList
              suggestionsList={suggestions}
              selectedSuggestion={handleSuggestionClick}
              highlightInput={inputValue}
            />
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
