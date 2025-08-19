import React, { useEffect } from "react";
import { useState } from "react";
import SuggestionsList from "./SuggestionsList";

const Autocomplete = ({
  staticData,
  placeholder = "",
  fetchSuggestions,
  dataKey = "",
  customeLoading = "Loading ...",
  onSelect = () => {},
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  customStyles = {},
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const getSuggestions = async (query) => {
    setLoading(true);
    setError(null);
    try {
      let result;
      if (staticData.length > 0) {
        result = staticData.filter((item) => {
          return item.toLowercase().includes(item.toLowercase());
        });
      } else {
        result = await fetchSuggestions(query);
      }
      setsuggestions(result);
    } catch (error) {
      setError("Failed to fetch suggestions");
      setsuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      getSuggestions(inputValue);
    } else {
      setsuggestions([]);
    }
    return () => {};
  }, [inputValue]);

  console.log({ suggestions });

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
      {(suggestions?.length > 0 || loading || error) && (
        <ul className="absolute left-0 top-full mt-1 w-full border border-gray-300 bg-white rounded shadow">
          <SuggestionsList
            suggestionsList={suggestions}
            selectedSuggestion={() => {}}
          />
          {error && <div>{error}</div>}
          {loading && <div>{loading}</div>}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
