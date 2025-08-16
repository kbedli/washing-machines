import { useState } from "react";
import polygon from "../assets/images/select-polygon.png";

interface CustomSelectProps {
  label: string;
  name: string;
  options: (string | number)[];
  value: string | number | null;
  onChange: (e: { target: { name: string; value: string | number } }) => void;
}

export const CustomSelect = ({
  label,
  name,
  options,
  value,
  onChange,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string | number) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <label className="input-label">{label}</label>
      <div className="select-box" onClick={toggleDropdown}>
        {value}

        <img className="arrow" src={polygon} alt="arrow"></img>
      </div>
      {isOpen && (
        <ul className="options-list">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="option-item"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
