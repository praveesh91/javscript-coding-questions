import React from "react";

const SuggestionsList = ({ suggestionsList, selectedSuggestion }) => {
  console.log({ suggestionsList });

  return (
    <>
      {suggestionsList.map((el) => (
        <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
          {el.name}
        </li>
      ))}
    </>
  );
};

export default SuggestionsList;
