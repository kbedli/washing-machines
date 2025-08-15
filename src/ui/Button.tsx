import { useState } from "react";

export const Button = () => {
  const [itemSelected, setItemSelected] = useState<boolean>(false);
  return (
    <button
      className={`btn ${itemSelected ? "btn-selected" : "btn-not-selected"}`}
      onClick={() => setItemSelected(!itemSelected)}
    >
      {itemSelected ? "Wybrane" : "Wybierz"}
    </button>
  );
};
