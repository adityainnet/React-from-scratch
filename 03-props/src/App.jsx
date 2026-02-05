import React from "react";
import Card from "./component/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Aman" age={18} />
      <Card user="Rahul" age={21} />
    </div>
  );
};

export default App;
