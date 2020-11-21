const generateCarCard = (car) => {
  const template = document.querySelector("#car-card").innerHTML;
  return template.replace(/\${(.*?)}/g, (x, g) => car[g]);
};

export const appendCars = (cars) => {
  if (!cars) {
    return;
  }
  const cardHTML = cars.map((c) => generateCarCard(c.value)).join("");
  document.querySelector(".mdl-grid").innerHTML += cardHTML;
};
