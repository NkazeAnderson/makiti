import { Training } from "../constants/mocks";

function CourseCard({
  training,
  click,
}: {
  training: Training;
  click(id: string): void;
}) {
  return (
    <div
      onClick={() => click(training.id)}
      className="w-[50%] w-max-[600px] border mx-auto my-2 p-2 rounded-lg text-white"
    >
      <div className="flex justify-between">
        <h2>{training.name}</h2>
        <h3 className="text-green-700">$ {training.price} </h3>
      </div>

      <div className="flex space-x-2">
        <h2>Available On:</h2>
        {training.dates.map((date) => (
          <h5 key={date}> {date}</h5>
        ))}
      </div>
      <div className="flex space-x-2">
        <h2>Instructors:</h2>
        {training.lecturer.map((lecturer) => (
          <h5 key={lecturer.Name} className=" underline">
            {lecturer.Name}
          </h5>
        ))}
      </div>

      <p>{training.description}</p>
    </div>
  );
}

export default CourseCard;
