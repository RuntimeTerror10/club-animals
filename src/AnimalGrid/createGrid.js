const shuffleAnimals = (buttons) => {
  for (let i = buttons.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = buttons[i];
    buttons[i] = buttons[j];
    buttons[j] = temp;
  }
  return buttons;
};

export const createGridHandler = (animals) => {
  let i = 0;
  let buttons = [];
  while (i < 2) {
    animals.forEach((animal) => {
      buttons.push(animal);
    });
    i++;
  }
  const shuffledAnimals = shuffleAnimals(buttons);
  return shuffledAnimals;
};
