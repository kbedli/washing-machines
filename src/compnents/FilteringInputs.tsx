import { useContext, type ChangeEvent } from "react";
import { GlobalContext } from "../Context";
import data from "../data";

export const FilteringInputs = () => {
  const { filteringInputs, setFilteringInputs } = useContext(GlobalContext);

  const functionsCategories = [
    "Wszystkie",
    ...new Set(data.flatMap((item) => item.functions)),
  ];

  const energyClassCategories = [
    "Wszystkie",
    ...new Set(data.flatMap((item) => item.energyClass).sort()),
  ];

  const capacityCategories = [
    "Wszystkie",
    ...new Set(data.flatMap((item) => item.capacity).sort((a, b) => a - b)),
  ];

  const handleInputsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilteringInputs((items) => ({
      ...items,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <div>
        <label>Sortuj po:</label>
        <select
          name="sortBy"
          value={filteringInputs.sortBy}
          onChange={handleInputsChange}
        >
          <option>Popularność</option>
          <option>Cena</option>
          <option>Pojemność</option>
        </select>
      </div>

      <div>
        <label>Funkcje:</label>
        <select
          name="functions"
          value={filteringInputs.functions}
          onChange={handleInputsChange}
        >
          {functionsCategories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
      </div>

      <div>
        <label>Klasa energetyczna:</label>
        <select
          name="energyClass"
          value={filteringInputs.energyClass}
          onChange={handleInputsChange}
        >
          {energyClassCategories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
          <option>F</option>
        </select>
      </div>

      <div>
        <label>Pojemność:</label>
        <select
          name="capacity"
          value={filteringInputs.capacity}
          onChange={handleInputsChange}
        >
          {capacityCategories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
