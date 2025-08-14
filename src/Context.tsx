import { createContext, useState } from "react";
import data from "./data";

type Item = {
  id: number;
  image: string;
  title: string;
  capacity: number;
  dimensions: string;
  functions: string[];
  energyClass: string;
  priceValidityDate: string;
  price: number;
  instalments: string;
  popularity: number;
};

type FilteringInputsTypes = {
  sortBy: string;
  functions: string;
  energyClass: string;
  capacity: string;
  searchTerm: string;
};

type GlobalContextType = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  allItems: Item[];
  setAllItems: React.Dispatch<React.SetStateAction<Item[]>>;
  filteringInputs: {
    sortBy: string;
    functions: string;
    energyClass: string;
    capacity: string;
    searchTerm: string;
  };
  setFilteringInputs: React.Dispatch<
    React.SetStateAction<FilteringInputsTypes>
  >;
};

const defaultValues: GlobalContextType = {
  allItems: data,
  setAllItems: (() => {}) as React.Dispatch<React.SetStateAction<Item[]>>,
  items: data,
  setItems: (() => {}) as React.Dispatch<React.SetStateAction<Item[]>>,
  filteringInputs: {
    sortBy: "Wszystkie",
    functions: "Wszystkie",
    energyClass: "Wszystkie",
    capacity: "Wszystkie",
    searchTerm: "",
  },
  setFilteringInputs: (() => {}) as React.Dispatch<
    React.SetStateAction<FilteringInputsTypes>
  >,
};

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext<GlobalContextType>(defaultValues);

const GlobalState = () => {
  const [allItems, setAllItems] = useState<Item[]>(data); //all data
  const [items, setItems] = useState<Item[]>(data); //filtered data
  const [filteringInputs, setFilteringInputs] = useState<FilteringInputsTypes>({
    sortBy: "Wszystkie",
    functions: "Wszystkie",
    energyClass: "Wszystkie",
    capacity: "Wszystkie",
    searchTerm: "",
  });
  return {
    items,
    setItems,
    filteringInputs,
    setFilteringInputs,
    allItems,
    setAllItems,
  };
};

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    items,
    setItems,
    filteringInputs,
    setFilteringInputs,
    allItems,
    setAllItems,
  } = GlobalState();
  return (
    <GlobalContext.Provider
      value={{
        items,
        setItems,
        filteringInputs,
        setFilteringInputs,
        allItems,
        setAllItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
