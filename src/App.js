import { useState } from "react";
import { Menu } from "./UI/Menu/Menu";
import { AnimalGrid } from "./AnimalGrid/AnimalGrid";
import { MoveContextProvider } from "./GameContext/GameContextProvider";
import { StyledApp } from "./App.styled";
import { GameResult } from "./UI/Modal/GameResult";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const startGame = () => {
    setIsMenuVisible(false);
  };

  const handleGameOver = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setTimeout(() => {
      setIsModalVisible(false);
    }, 500);
  };

  const goToMenu = () => {
    setIsMenuVisible(true);
    setIsModalVisible(false);
  };

  return (
    <StyledApp>
      {isMenuVisible ? (
        <Menu onStartGame={startGame} />
      ) : (
        <MoveContextProvider onGameOver={handleGameOver}>
          {isModalVisible ? (
            <GameResult onReset={handleModalClose} onGoBackToMenu={goToMenu} />
          ) : null}
          <AnimalGrid />
        </MoveContextProvider>
      )}
    </StyledApp>
  );
}

export default App;
