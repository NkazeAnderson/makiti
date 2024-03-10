import React from "react";

function Navigation({ action }: { action(): void }) {
  return (
    <div className="w-full h-[50px] bg-black text-white">
      <h1 className=" text-center text-3xl">Welcome to Makiti courses</h1>

      <div className="flex space-x-6 px-3">
        <button
          onClick={() => action()}
          className=" p-1 border  bg-blue-600 rounded-md"
        >
          {" "}
          View All
        </button>
        <button
          onClick={() => {
            document.getElementById("formSection")?.scrollIntoView();
          }}
        >
          + Add Tutorial
        </button>
      </div>
    </div>
  );
}

export default Navigation;
