import { API_URL_LATEST } from "./constants.js";

export const loadCars = async () => {
  const response = await fetch(API_URL_LATEST);
  const data = await response.json();
  // eslint-disable-next-line no-console
  console.log(data);
};
