import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  function achanging() {
    console.log("A ki value chnge ho gyi");
  }
  function bchanging() {
    console.log("B ki value chnge ho gyi");
  }
  useEffect(
    function () {
      bchanging();
    },
    [b],
  );
  useEffect(
    function () {
      achanging();
    },
    [a],
  );
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Chnage A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Chnage B
      </button>
    </div>
  );
};

export default App;

/*import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);
  useEffect(function () {
    console.log("use effect is running......");
  }, []);
  return (
    <div>
      <h1>num{num}</h1>
      <h1>num2{num2}</h1>
      <button
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10);
        }}
      >
        Hover
      </button>
    </div>
  );
};

export default App;
*/
