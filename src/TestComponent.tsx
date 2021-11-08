import React, { useState } from "react";

interface Props {
  text: string;
}
interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(null);
  const [user, setUser] = useState<UserData>({ id: 1, name: "dammy" });
  const [inputData, setInputData] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{count}歳</h2>
      <input type="text" value={inputData} onChange={handleChange}></input>
      <h2>{inputData}</h2>
    </div>
  );
};

export default TestComponent;
