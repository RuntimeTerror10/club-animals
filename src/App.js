import { useState } from "react";
import { Loader } from "./Loader/Loader";
import { Menu } from "./UI/Menu/Menu";
import { AnimalGrid } from "./AnimalGrid/AnimalGrid";
import { MoveContextProvider } from "./GameContext/GameContextProvider";
import { StyledApp } from "./App.styled";
import { GameResult } from "./UI/Modal/GameResult";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledApp>
          {isMenuVisible ? (
            <Menu onStartGame={startGame} />
          ) : (
            <MoveContextProvider
              onGameOver={handleGameOver}
              isMenuVisible={isMenuVisible}
            >
              {isModalVisible && (
                <GameResult
                  onReset={handleModalClose}
                  onGoBackToMenu={goToMenu}
                />
              )}
              <AnimalGrid />
            </MoveContextProvider>
          )}
        </StyledApp>
      )}
    </>
  );
}

export default App;
