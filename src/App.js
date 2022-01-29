import { AnimalGrid } from "./AnimalGrid/AnimalGrid";
import { MoveTracker } from "./AnimalMoveTrack/MoveTracker";
import { MoveContextProvider } from "./GameContext/GameContextProvider";
import { StyledApp } from "./App.styled";

function App() {
  return (
    <StyledApp>
      <MoveContextProvider>
        <AnimalGrid />
        <MoveTracker />
      </MoveContextProvider>
    </StyledApp>
  );
}

export default App;
