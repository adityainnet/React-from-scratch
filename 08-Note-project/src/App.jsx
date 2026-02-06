import React, { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, details);

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };
  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  gap-4 lg:w-1/2  items-start   p-10 flex-col"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>{" "}
        {/* Phla input for HEAding */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full border-2 font-medium outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* DETAILED WLA INPUT */}
        <textarea
          type="text"
          className="px-5 w-full outline-none flex items-start font-medium h-32 py-2 border-2 rounded"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:scale-95 font-medium text-black w-full outline-none px-5 py-2 rounded">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2  p-10 ">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className=" mt-5 h-[90%] overflow-auto flex items-start justify-start flex-wrap gap-5">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col relative h-52 w-40 bg-cover rounded-2xl  text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-2 leading-tight font-medium text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 rounded font-bold bg-red-600 py-1 text-xs text-white"
                >
                  Delete Note
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
