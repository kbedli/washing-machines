import { useContext, type ChangeEvent, useEffect } from "react";
import { GlobalContext } from "../Context";

export const SearchInput = () => {
  const { filteringInputs, setFilteringInputs, setItems, allItems } =
    useContext(GlobalContext);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteringInputs((prev) => ({
      ...prev,
      searchTerm: e.target.value,
    }));
  };

  useEffect(() => {
    let filteredData = allItems;

    if (filteringInputs.searchTerm.trim() !== "") {
      const term = filteringInputs.searchTerm.toLowerCase();
      filteredData = filteredData.filter((item) => {
        return item.title.toLowerCase().includes(term);
      });
    }

    setItems(filteredData);
  }, [filteringInputs.searchTerm, allItems, setItems]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={filteringInputs.searchTerm}
      onChange={handleSearchChange}
    />
  );
};
