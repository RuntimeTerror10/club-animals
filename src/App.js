import { useState, useEffect } from "react";
import { Loader } from "./Loader/Loader";
import { Menu } from "./Menu/Menu";
import { AnimalGrid } from "./AnimalGrid/AnimalGrid";
import { MoveCounter } from "./Moves/MoveCounter";
import { GameContextProvider } from "./GameContext/GameContextProvider";
import { StyledApp } from "./App.styled";
import { GameResult } from "./GameResult/GameResult";
import Confetti from "react-confetti";

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
            <GameContextProvider
              onGameOver={handleGameOver}
              isMenuVisible={isMenuVisible}
            >
              {isModalVisible && (
                <div className="result-wrapper">
                  <Confetti
                    recycle={false}
                    numberOfPieces={900}
                    className="confetti"
                  />
                  <GameResult
                    onReset={handleModalClose}
                    onGoBackToMenu={goToMenu}
                  />
                </div>
              )}
              <AnimalGrid />
              <MoveCounter />
            </GameContextProvider>
          )}
        </StyledApp>
      )}
    </>
  );
}

export default App;
