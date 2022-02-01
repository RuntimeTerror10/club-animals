import { AnimalGrid } from "./AnimalGrid/AnimalGrid";
import { MoveContextProvider } from "./GameContext/GameContextProvider";
import { StyledApp } from "./App.styled";

function App() {
  return (
    <StyledApp>
      <MoveContextProvider>
        <AnimalGrid />
      </MoveContextProvider>
    </StyledApp>
  );
}

export default App;
