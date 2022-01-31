import { useState } from "react";
import { AnimalGrid } from "./AnimalGrid/AnimalGrid";
import { MoveTracker } from "./AnimalMoveTrack/MoveTracker";
import { MoveContextProvider } from "./GameContext/GameContextProvider";
import { StyledApp } from "./App.styled";
import { GameResult } from "./UI/Modal/GameResult";
import { Menu } from "./UI/Menu/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startGame = () => {
    setIsMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledApp>
      {isMenuOpen ? (
        <Menu onStartGame={startGame} />
      ) : (
        <MoveContextProvider onGameOver={openModal}>
          {isModalOpen && <GameResult onReset={closeModal} />}2
          <AnimalGrid />
          <MoveTracker />
        </MoveContextProvider>
      )}
    </StyledApp>
  );
}

export default App;
