import { useEffect, useState } from "react";
import CourseCard from "./components/CourseCard";
import Navigation from "./components/Navigation";
import { Training } from "./constants/mocks";
import { get, post } from "./utilities/useFetch";
import Form from "./components/Form";

function App() {
  const [training, setTraining] = useState<Training | Training[]>();

  useEffect(() => {
    getTraining();
  }, []);

  const getTraining = (id?: string) => {
    get(id ? "trainings/" + id : "trainings/").then((item) => {
      setTraining(item);
    });
  };

  if (!training) {
    return (
      <div>
        <p>Fethcing from backend...</p>
      </div>
    );
  }

  const addNewTraining = (fields: Training) => {
    post(fields).then((res) => {
      setTraining(res);
      console.log("Response from Db");
      console.log(res);
    });
  };
  return (
    <main className="bg-gray-900 w-screen h-screen ">
      <Navigation action={() => getTraining()} />
      <div className="w-full scrollView overflow-scroll">
        {!Array.isArray(training) ? (
          <CourseCard click={getTraining} training={training} />
        ) : (
          training.map((item) => (
            <CourseCard key={item.name} click={getTraining} training={item} />
          ))
        )}
        <section
          id="formSection"
          className="flex justify-center w-[50%] w-max-[600px] border mx-auto my-2 p-2 rounded-lg text-white"
        >
          <Form setTraining={(field) => addNewTraining(field)} />
        </section>
      </div>
    </main>
  );
}

export default App;
