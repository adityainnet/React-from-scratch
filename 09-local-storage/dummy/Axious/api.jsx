import React from "react";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };
  return (
    <div>
      <button onClick={getdata}>Get data</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <h3>
              hello,{elem.author}
              {idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;

//API CALL BY FETCH METHOD
//  const getdata = async () => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1",
//     );
//     const data = await response.json();
//     console.log(data);
//   };

// axious api
/*const getdata = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(response.data);
  };*/
