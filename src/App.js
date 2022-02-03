import { useState, useEffect } from "react";
import { Loader } from "./Loader/Loader";
import { Menu } from "./Menu/Menu";
import { AnimalGrid } from "./AnimalGrid/AnimalGrid";
import { GameContextProvider } from "./GameContext/GameContextProvider";
import { StyledApp } from "./App.styled";
import { GameResult } from "./GameResult/GameResult";
import Confetti from "react-confetti";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

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

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

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
                    width={width}
                    height={height}
                  />
                  <GameResult
                    onReset={handleModalClose}
                    onGoBackToMenu={goToMenu}
                  />
                </div>
              )}
              <AnimalGrid />
            </GameContextProvider>
          )}
        </StyledApp>
      )}
    </>
  );
}

export default App;
