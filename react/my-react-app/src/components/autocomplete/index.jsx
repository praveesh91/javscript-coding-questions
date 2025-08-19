import React from "react";
import Autocomplete from "./Autocomplete";

const index = () => {
  const data = [];

  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.recipes;
  };
  return (
    <div>
      <Autocomplete
        staticData={data}
        placeholder=""
        fetchSuggestions={fetchSuggestions}
        dataKey=""
        customLoading={<>Loading recipes...</>}
        onSelect={() => {}}
        onChange={() => {}}
        onBlur={() => {}}
        onFocus={() => {}}
        customStyles={{}}
      />
    </div>
  );
};

export default index;
