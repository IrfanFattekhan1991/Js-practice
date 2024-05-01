import { useState } from "react";

const Child = ({ getData }) => {
  const [input, setInput] = useState("");

  const clickHandler = () => {
    getData(input);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={clickHandler}>Send Data</button>
    </div>
  );
};

export default Child;
