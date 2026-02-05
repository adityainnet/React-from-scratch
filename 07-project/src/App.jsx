import React from "react";

const pageScrolling = (elem) => {
  console.log("page Scrolling.........", elem);
};
const App = () => {
  return (
    <div
      onWheel={(elem) => {
        pageScrolling(elem.deltaY);
      }}
    >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
