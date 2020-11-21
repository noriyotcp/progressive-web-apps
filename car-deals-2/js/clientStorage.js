// eslint-disable-next-line no-undef
const carsInstance = localforage.createInstance({
  name: "cars"
});
let lastIndex = -1;

export const addCars = async (newCars) => {
  await carsInstance.setItems(newCars);
};

export const getCars = async () => {
  // keys を降順で取り出す。この時点で length チェックを行っている
  const keys = (await carsInstance.keys()).reverse();
  if (lastIndex >= keys.length) {
    return;
  }
  // keys から 3件ずつ取り出す。keys の内容は変更される
  const results = await carsInstance.getItems(keys.splice(lastIndex + 1, 3));
  lastIndex += 3;
  // results (DB の values) をオブジェクトの values にしつつ降順にする
  return Object.values(results).reverse();
};

export const getLastItemId = async () => {
  const keys = (await carsInstance.keys()).reverse();
  return keys[lastIndex];
};
