import React, { useState } from "react";
import { Training } from "../constants/mocks";
type LecturerOBJ = {
  Name: string;
};
function Form({ setTraining }: { setTraining(field: Training): void }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [lecturer, setLecturer] = useState<string[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  const handleSubmit = () => {
    const lecturers: LecturerOBJ[] = [];
    lecturer.forEach((lect) => {
      lecturers.push({ Name: lect });
    });
    setTraining({
      id: "104",
      name,
      price: parseInt(price),
      description,
      lecturer: lecturers,
      dates,
    });
    document.getElementById("reset")?.click();
    setName("");
    setPrice("");
    setDates([]);
    setLecturer([]);
    setDescription("");
  };

  return (
    <form className="p-3 w-full">
      <div className="my-2">
        <div>
          <label htmlFor="name">Course Name: </label>
        </div>

        <input
          id="name"
          name="name"
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          type="text"
        ></input>
      </div>
      <div className="my-2">
        <div>
          <label htmlFor="dates">Dates: </label>
        </div>
        {dates.map((date) => (
          <span key={date} className="p-2 text-white border m-2">
            {date}
          </span>
        ))}
        <input
          id="dates"
          name="dates"
          type="date"
          onChange={(e) => {
            const newDates = [...dates, e.currentTarget.value];
            setDates(newDates);
          }}
        ></input>
      </div>
      <div className="my-2">
        <div>
          <label htmlFor="thoughtBy">Thought By: </label>
        </div>
        {lecturer.map((lect) => (
          <span key={lect} className="p-2 text-white underline uppercase">
            {lect.trim()}
          </span>
        ))}
        <input
          id="thoughtBy"
          name="thoughtBy"
          type="text"
          onChange={(e) => {
            const lect = e.currentTarget.value.split(",");

            setLecturer(lect);
          }}
        ></input>
        <p className=" text-sm">Separate with commas</p>
      </div>
      <div className="my-2">
        <div>
          <label htmlFor="price">Price: </label>
        </div>

        <input
          id="price"
          name="price"
          type="number"
          onChange={(e) => {
            setPrice(e.currentTarget.value);
          }}
        ></input>
      </div>
      <div className="my-2">
        <div>
          <label htmlFor="description">Description: </label>
        </div>
        <textarea
          id="description"
          name="description"
          rows={6}
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        ></textarea>
      </div>
      <button
        className="bg-green-600 rounded-xl border px-4 text-white"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Submit
      </button>
      <button className="hidden" type="reset" id="reset">
        Reset
      </button>
    </form>
  );
}

export default Form;
