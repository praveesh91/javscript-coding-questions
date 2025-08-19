import React from "react";

const SuggestionsList = ({
  suggestionsList,
  selectedSuggestion,
  highlightInput,
}) => {
  const getHighlightedText = (text, highlight = "") => {
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts
          .filter((part) => part)
          .map((part, i) =>
            regex.test(part) ? (
              <mark key={i} className="bg-yellow-200 font-semibold">
                {part}
              </mark>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
      </span>
    );
  };

  return (
    <>
      {suggestionsList.map((suggestion) => (
        <li
          key={suggestion.id}
          className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => selectedSuggestion(suggestion)}
        >
          {getHighlightedText(suggestion.name, highlightInput)}
        </li>
      ))}
    </>
  );
};

export default SuggestionsList;
