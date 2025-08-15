import { useContext, type ChangeEvent } from "react";
import { GlobalContext } from "../Context";

export const FilteringInputs = () => {
  const { filteringInputs, setFilteringInputs, allItems } =
    useContext(GlobalContext);

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

  const handleInputsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilteringInputs((items) => ({
      ...items,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="filters">
      <div className="filter">
        <label className="input-label">Sortuj po:</label>
        <select
          name="sortBy"
          value={filteringInputs.sortBy}
          onChange={handleInputsChange}
          className="select-filter"
        >
          <option>Popularność</option>
          <option>Cena</option>
          <option>Pojemność</option>
        </select>
      </div>

      <div className="filter">
        <label className="input-label">Funkcje:</label>
        <select
          name="functions"
          value={filteringInputs.functions}
          onChange={handleInputsChange}
          className="select-filter"
        >
          {functionsCategories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
      </div>

      <div className="filter">
        <label className="input-label">Klasa energetyczna:</label>
        <select
          name="energyClass"
          value={filteringInputs.energyClass}
          onChange={handleInputsChange}
          className="select-filter"
        >
          {energyClassCategories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
      </div>

      <div className="filter">
        <label className="input-label">Pojemność:</label>
        <select
          name="capacity"
          value={filteringInputs.capacity}
          onChange={handleInputsChange}
          className="select-filter"
        >
          {capacityCategories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
