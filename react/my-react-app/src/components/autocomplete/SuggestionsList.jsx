import React from "react";

const SuggestionsList = ({ suggestionsList, selectedSuggestion }) => {
  return (
    <>
      {suggestionsList.map((suggestion) => (
        <li
          className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => selectedSuggestion(suggestion)}
        >
          {suggestion.name}
        </li>
      ))}
    </>
  );
};

export default SuggestionsList;
