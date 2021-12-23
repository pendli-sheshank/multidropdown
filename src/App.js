import { useState } from "react";
import Select from "react-select";
import { AiOutlineLeft } from "react-icons/ai"
import "./App.css";

function App() {
  const data = [
    { label: "India", value: 1 },
    { label: "America", value: 2 },
    { label: "Europe", value: 3 },
    { label: "Germany", value: 4 },
    { label: "Canada", value: 5 },
    { label: "Austrila", value: 6 },
    { label: "Italy", value: 7 },
    { label: "Russia", value: 8 }
  ];
  const [options] = useState(data);
  const [displayValue, getvalue] = useState();
  const Selectedelements = (e) => {
    getvalue(e.map(ss => (<li>{ss.label}<AiOutlineLeft /></li>)));

  }

  return (
    <div className="App">
      <div className="dd">
        <h3>Multiselect</h3>
        <Select className="select" isMulti options={data} onChange={Selectedelements} ></Select>

      </div>
      <div className="dd1">
        <h4>This is side container</h4>
        <ul className="col">
          {displayValue}

        </ul>


      </div>
    </div>
  );
}

export default App;
