import React from "react";

const App = () => {
  const user = {
    username: "sarthak",
    age: 18,
    city: "bhopal",
  };
  localStorage.setItem("user", JSON.stringify(user));

  // const usera = localStorage.getItem("user");
  //  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  return <div>App</div>;
};

export default App;
