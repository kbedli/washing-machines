import { useContext, useMemo } from "react";
import { GlobalContext } from "../Context";

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
    }

    return result;
  }, [items, filteringInputs]);

  return (
    <div className="list-of-items">
      {filterItems.map((item) => {
        const {
          id,
          title,
          capacity,
          dimensions,
          functions,
          energyClass,
          priceValidityDate,
          price,
          instalments,
        } = item;
        return (
          <article className="item" key={id}>
            <p>{title}</p>
            <p>{capacity}</p>
            <p>{dimensions}</p>
            <p>{functions}</p>
            <p>{energyClass}</p>
            <p>{priceValidityDate}</p>
            <p>{price}</p>
            <p>{instalments}</p>
          </article>
        );
      })}
    </div>
  );
};
