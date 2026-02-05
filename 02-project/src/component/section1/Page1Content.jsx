import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = () => {
  return (
    <div className="py-3 h-[86vh] flex items-center gap-10 bg-amber-950 px-18">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Page1Content;
