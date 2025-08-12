import { useContext, type ChangeEvent } from "react";
import { GlobalContext } from "../Context";

export const FilteringInputs = () => {
  const { filteringInputs, setFilteringInputs } = useContext(GlobalContext);

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
          <option>Wszystkie</option>
          <option>Drzwi AddWash</option>
          <option>Panel AI Control</option>
          <option>Silnik inwerterowy</option>
          <option>Wyświetlacz elektroniczny</option>
        </select>
      </div>

      <div>
        <label>Klasa energetyczna:</label>
        <select
          name="energyClass"
          value={filteringInputs.energyClass}
          onChange={handleInputsChange}
        >
          <option>Wszystkie</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
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
          <option>Wszystkie</option>
          <option>8</option>
          <option>9</option>
          <option>10.5</option>
        </select>
      </div>
    </div>
  );
};
