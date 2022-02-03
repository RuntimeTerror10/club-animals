const shuffleAnimals = (buttons) => {
  for (let i = buttons.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = buttons[i];
    buttons[i] = buttons[j];
    buttons[j] = temp;
  }
  return buttons;
};

export const createGrid = (animals) => {
  let buttons = [];

  animals.forEach((animal) => {
    buttons.push(animal);
    buttons.push(animal);
  });

  const shuffledAnimals = shuffleAnimals(buttons);
  return shuffledAnimals;
};
