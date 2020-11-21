// eslint-disable-next-line no-undef
const carsInstance = localforage.createInstance({
  name: "cars"
});

export const addCars = async (newCars) => {
  await carsInstance.setItems(newCars);
};
