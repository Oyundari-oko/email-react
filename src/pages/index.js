// import { useState } from "react";

// const Pass = () => {
//   const [inputValue, setInputValue] = useState(true);
//   const addTAsk = () => {
//     setInputValue(!inputValue);
//   };
//   return (
//     <div>
//       <input type={inputValue ? "password" : "text"}></input>
//       <button onClick={() => addTAsk()}>ShowPassword</button>
//     </div>
//   );
// };
// export default Pass;

// import { useState } from "react";

// const Pass = () => {
//   const [inputValue, setInputValue] = useState("password");
//   const addTAsk = () => {
//     if (inputValue === "text") {
//       setInputValue("password");
//     } else {
//       setInputValue("text");
//     }
//   };
//   return (
//     <div>
//       <input type={inputValue}></input>
//       <button onClick={() => addTAsk()}>ShowPassword</button>
//     </div>
//   );
// };
// export default Pass;

import { useState } from "react";
const Colors = () => {
  const [bgColor, setBgColor] = useState("");
  const backgroundColor = (color) => {
    setBgColor(color);
    console.log(color);
  };
  return (
    <div style={{ backgroundColor: bgColor, width: "100vw", height: "100vh" }}>
      <select onChange={(event) => backgroundColor(event.target.value)}>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="pink">pink</option>
      </select>
    </div>
  );
};
export default Colors;
use client 