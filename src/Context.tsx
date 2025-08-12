import { createContext, useState } from "react";
import data from "./data";

type Item = {
  id: number;
  title: string;
  capacity: number;
  dimensions: string;
  functions: string[];
  energyClass: string;
  priceValidityDate: string;
  price: number;
  instalments: string;
};

type FilteringInputsTypes = {
  sortBy: string;
  functions: string;
  energyClass: string;
  capacity: string;
};

type GlobalContextType = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  filteringInputs: {
    sortBy: string;
    functions: string;
    energyClass: string;
    capacity: string;
  };
  setFilteringInputs: React.Dispatch<
    React.SetStateAction<FilteringInputsTypes>
  >;
};

const defaultValues: GlobalContextType = {
  items: data,
  setItems: (() => {}) as React.Dispatch<React.SetStateAction<Item[]>>,
  filteringInputs: {
    sortBy: "Wszystkie",
    functions: "Wszystkie",
    energyClass: "Wszystkie",
    capacity: "Wszystkie",
  },
  setFilteringInputs: (() => {}) as React.Dispatch<
    React.SetStateAction<FilteringInputsTypes>
  >,
};

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext<GlobalContextType>(defaultValues);

const GlobalState = () => {
  const [items, setItems] = useState<Item[]>(data);
  const [filteringInputs, setFilteringInputs] = useState<FilteringInputsTypes>({
    sortBy: "Wszystkie",
    functions: "Wszystkie",
    energyClass: "Wszystkie",
    capacity: "Wszystkie",
  });
  return { items, setItems, filteringInputs, setFilteringInputs };
};

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { items, setItems, filteringInputs, setFilteringInputs } =
    GlobalState();
  return (
    <GlobalContext.Provider
      value={{
        items,
        setItems,
        filteringInputs,
        setFilteringInputs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
