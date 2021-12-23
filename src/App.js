import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    { country: "India", id: 1 },
    { country: "America", id: 2 },
    { country: "Europe", id: 3 },
    { country: "Germany", id: 4 },
    { country: "Canada", id: 5 },
    { country: "Austrila", id: 6 },
    { country: "Italy", id: 7 },
    { country: "Russia", id: 8 }
  ];
  const [options] = useState(data);
  return (
    <div className="App">
      <div className="dd">
        <h3>Multiselect</h3>
        <Multiselect options={options} displayValue="country" />
      </div>
      <div className="dd">
        <h1>This is side container</h1>
      </div>
    </div>
  );
}

export default App;
