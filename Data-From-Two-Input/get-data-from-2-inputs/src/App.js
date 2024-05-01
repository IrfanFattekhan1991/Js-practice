import { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const [listData, setListData] = useState([]);

  const clickHandler = () => {
    setListData((prevData) => [
      ...prevData,
      { input1: input1, input2: input2 },
    ]);
    setInput1("");
    setInput2("");
    console.log(listData);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button onClick={clickHandler}>Submit</button>
      <div>
        <ul>
          {listData.map((item, index) => (
            <div key={index}>
              <li>{item.input1}</li>
              <li>{item.input2}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
