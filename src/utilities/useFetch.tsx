import { Training, trainings } from "../constants/mocks";

const backend_url = import.meta.env.VITE_BACKEND_URL;

export const get = async (path: string): Promise<Training | Training[]> => {
  if (!backend_url) {
    throw new Error("Set VITE_BACKEND_URL  in env");
  }
  console.log("Getting details from:", backend_url + path);

  const pathParts = path.split("/");
  let trainingID: string;
  if (pathParts.length > 1) {
    trainingID = pathParts[pathParts.length - 1];
  }
  const training = trainings.find((item) => item.id === trainingID);

  if (training) {
    return training;
  }
  return trainings.sort(
    (first, second) => parseInt(second.id) - parseInt(first.id)
  );
};

export const post = async (data: Omit<Training, "id">): Promise<Training> => {
  if (!backend_url) {
    throw new Error("Set VITE_BACKEND_URL  in env");
  }
  const newID: string = "10" + (trainings.length + 1);
  const training = { ...data, id: newID };
  trainings.push(training);
  console.log("Posting data to Backend");
  return training;
};
