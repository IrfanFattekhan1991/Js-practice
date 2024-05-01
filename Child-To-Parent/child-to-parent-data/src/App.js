import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [data, setData] = useState("");

  const getDataFromChild = (childData) => {
    setData(childData);
  };

  return (
    <div className="App">
      <Child getData={getDataFromChild} />
      <h1>Data from Child - {data}</h1>
    </div>
  );
}

export default App;
