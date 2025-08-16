import { useContext } from "react";
import { GlobalContext } from "../Context";
import { CustomSelect } from "../ui/CustomSelect";

export const FilteringInputs = () => {
  const { filteringInputs, setFilteringInputs, allItems } =
    useContext(GlobalContext);

  const sortCateories = ["Popularność", "Cena", "Pojemność"];

  const functionsCategories = [
    "Wszystkie",
    ...new Set(allItems.flatMap((item) => item.functions)),
  ];

  const energyClassCategories = [
    "Wszystkie",
    ...new Set(allItems.flatMap((item) => item.energyClass).sort()),
  ];

  const capacityCategories = [
    "Wszystkie",
    ...new Set(allItems.flatMap((item) => item.capacity).sort((a, b) => a - b)),
  ];

  const handleInputsChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    setFilteringInputs((items) => ({
      ...items,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="filters">
      <CustomSelect
        label="Sortuj po:"
        name="sortBy"
        options={sortCateories}
        value={filteringInputs.sortBy}
        onChange={handleInputsChange}
      />
      <CustomSelect
        label="Funkcje:"
        name="functions"
        options={functionsCategories}
        value={filteringInputs.functions}
        onChange={handleInputsChange}
      />
      <CustomSelect
        label="Klasa energetyczna:"
        name="energyClass"
        options={energyClassCategories}
        value={filteringInputs.energyClass}
        onChange={handleInputsChange}
      />
      <CustomSelect
        label="Pojemność:"
        name="capacity"
        options={capacityCategories}
        value={filteringInputs.capacity}
        onChange={handleInputsChange}
      />
    </div>
  );
};
