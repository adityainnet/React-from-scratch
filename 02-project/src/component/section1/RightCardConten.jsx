import React from "react";
import { ArrowRight } from "lucide-react";
const RightCardConten = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-shadow-2xs text-xl leading-[1.2] text-white mb-15">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            aperiam maiores corrupti delectus exercitationem voluptatem
            reprehenderit. Amet, doloremque. Fugit, quo!
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-full ">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-full ">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardConten;
