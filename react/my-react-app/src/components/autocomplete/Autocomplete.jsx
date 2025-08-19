import React, { useEffect } from "react";
import { useState } from "react";

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
      console.log(suggestions);
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

  return (
    <div>
      <input
        className="border rounded p-1"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {error && <div>{error}</div>}
      {loading && <div>{loading}</div>}
    </div>
  );
};

export default Autocomplete;
