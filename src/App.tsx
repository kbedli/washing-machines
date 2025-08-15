import "./App.css";
import { FilteringInputs } from "./components/FilteringInputs";
import { ListOfItems } from "./components/ListOftems";
import { SearchInput } from "./components/SearchInput";

function App() {
  return (
    <div className="container">
      <h1 className="title">Wybierz urządzenie</h1>
      <SearchInput />
      <FilteringInputs />
      <ListOfItems />
    </div>
  );
}

export default App;
