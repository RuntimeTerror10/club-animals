import { useState } from "react";
import { AnimalGrid } from "./AnimalGrid/AnimalGrid";
import { MoveTracker } from "./AnimalMoveTrack/MoveTracker";
import { MoveContextProvider } from "./GameContext/GameContextProvider";
import { StyledApp } from "./App.styled";
import { GameResult } from "./UI/Modal/GameResult";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledApp>
      <MoveContextProvider onGameOver={openModal}>
        {isModalOpen && <GameResult onReset={closeModal} />}2
        <AnimalGrid />
        <MoveTracker />
      </MoveContextProvider>
    </StyledApp>
  );
}

export default App;
