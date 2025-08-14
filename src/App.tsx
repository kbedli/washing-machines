import { useContext } from "react";
import "./App.css";
import { FilteringInputs } from "./compnents/FilteringInputs";
import { ListOfItems } from "./compnents/ListOftems";
import { SearchInput } from "./compnents/SearchInput";
import { GlobalContext } from "./Context";

function App() {
  const { allItems } = useContext(GlobalContext);
  return (
    <div className="container">
      <h1 className="title">Wybierz urządzenie</h1>
      <SearchInput />
      <FilteringInputs />
      <p className="items-count">Liczba wyników: {allItems.length}</p>
      <ListOfItems />
    </div>
  );
}

export default App;
