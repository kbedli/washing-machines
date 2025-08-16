import { useContext, useEffect, useMemo, useState } from "react";
import { GlobalContext } from "../contexts/Context";
import { SingleItem } from "./SingleItem";

const visibleItems = 6;

export const ListOfItems = () => {
  const [visibleCount, setVisibleCount] = useState<number>(visibleItems);
  const [allItemsVisible, setAllItemsVisible] = useState<boolean>(false);

  const { items, filteringInputs } = useContext(GlobalContext);

  const handleShowMoreBtn = () => {
    setVisibleCount((prev) => prev + visibleItems);
  };

  // LIST OF ALL FILTERED ITEMS
  const filterItems = useMemo(() => {
    let result = [...items];

    // FILTER: Functions
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

  // ITEMS SLICED TO VISIBLECOUNT
  const visibleFilteredItems = useMemo(() => {
    return filterItems.slice(0, visibleCount);
  }, [filterItems, visibleCount]);

  // CONTROL OVER SHOWING THE BUTTON
  useEffect(() => {
    setAllItemsVisible(visibleCount >= filterItems.length);
  }, [visibleCount, filterItems.length]);

  return (
    <>
      <p className="items-count">Liczba wyników: {filterItems.length}</p>

      <div className="list-of-items">
        {visibleFilteredItems.map((item) => (
          <SingleItem key={item.id} {...item} />
        ))}
      </div>

      {!allItemsVisible && (
        <button className="show-more-btn" onClick={handleShowMoreBtn}>
          Pokaż więcej <span>▼</span>
        </button>
      )}
    </>
  );
};
