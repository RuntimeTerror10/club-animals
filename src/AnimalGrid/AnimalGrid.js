import { useEffect } from "react";
import { animals } from "../AnimalData/animals";
import { AnimalButton } from "./AnimalButton";

export const AnimalGrid = () => {
  const buttons = [];

  const generateRandomKey = () => {
    return `animal${Math.floor(Math.random() * 100000)}`;
  };

  const shuffleAnimals = () => {
    for (let i = buttons.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = buttons[i];
      buttons[i] = buttons[j];
      buttons[j] = temp;
    }
  };

  const createGrid = (animals) => {
    let i = 0;
    while (i < 3) {
      animals.forEach((animal) => {
        buttons.push(animal);
      });
      i++;
    }
    shuffleAnimals();
  };

  createGrid(animals);

  return (
    <div>
      {buttons.map((button) => {
        let animalKey = generateRandomKey();
        return <AnimalButton name={button.name} key={animalKey} />;
      })}
    </div>
  );
};
