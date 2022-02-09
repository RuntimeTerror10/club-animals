import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Club Animals</title>
        <meta property="og:title" content="Club Animals" />
        <meta property="og:description" content="Memory match game" />
        <meta
          property="og:image"
          content="https://club-animals.netlify.app/src/assets/banner.jpeg"
        />
        <meta property="og:url" content="https://club-animals.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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
