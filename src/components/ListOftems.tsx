import { useContext, useMemo } from "react";
import { GlobalContext } from "../Context";
import { SingleItem } from "./SingleItem";

export const ListOfItems = () => {
  const { items, filteringInputs } = useContext(GlobalContext);

  const filterItems = useMemo(() => {
    let result = [...items];

    // FILTER: Funcions
    if (filteringInputs.functions !== "Wszystkie") {
      result = result.filter((item) =>
        item.functions.includes(filteringInputs.functions)
      );
    }

    // FILTER: Energy Class
    if (filteringInputs.energyClass !== "Wszystkie") {
      result = result.filter(
        (item) => item.energyClass === filteringInputs.energyClass
      );
    }

    // FILTER: Capacity
    if (filteringInputs.capacity !== "Wszystkie") {
      const cap = parseFloat(filteringInputs.capacity);
      result = result.filter((item) => item.capacity === cap);
    }

    // SORTING
    if (filteringInputs.sortBy === "Cena") {
      result.sort((a, b) => a.price - b.price);
    } else if (filteringInputs.sortBy === "Pojemność") {
      result.sort((a, b) => a.capacity - b.capacity);
    } else if (filteringInputs.sortBy === "Popularność") {
      result.sort((a, b) => b.popularity - a.popularity);
    }

    return result;
  }, [items, filteringInputs]);

  return (
    <div className="list-of-items">
      {filterItems.map((item) => (
        <SingleItem key={item.id} {...item} />
      ))}
    </div>
  );
};
