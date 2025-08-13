import "./App.css";
import { FilteringInputs } from "./compnents/FilteringInputs";
import { ListOfItems } from "./compnents/ListOftems";
import { SearchInput } from "./compnents/SearchInput";

function App() {
  return (
    <div>
      <SearchInput />
      <FilteringInputs />
      <ListOfItems />
    </div>
  );
}

export default App;
