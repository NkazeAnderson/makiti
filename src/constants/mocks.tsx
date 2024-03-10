const training1 = {
  id: "101",
  name: "Video editing",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  lecturer: [{ Name: "Anthony K" }, { Name: "Moriam H" }],
  price: 1000,
  dates: ["06-01-2024", "26-01-2024"],
};
const training2 = {
  id: "102",
  name: "Ruby on Rails",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  lecturer: [{ Name: "Melinda K" }, { Name: "Brandon Y" }],
  price: 1000,
  dates: ["06-05-2024", "08-11-2024"],
};
const training3 = {
  id: "103",
  name: "Spring Boot",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  lecturer: [{ Name: "Anthony K" }, { Name: "Moriam H" }],
  price: 1000,
  dates: ["16-03-2024", "18-05-2024"],
};

export type Training = typeof training1;
export const trainings: Training[] = [training1, training2, training3];
