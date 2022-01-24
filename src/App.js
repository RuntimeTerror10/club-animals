import { AnimalGrid } from "./AnimalGrid/AnimalGrid";
import { MoveTracker } from "./AnimalMoveTrack/MoveTracker";
import { MoveContextProvider } from "./MoveContext/MoveContext";

import "./App.css";

function App() {
  return (
    <MoveContextProvider>
      <AnimalGrid />
      <MoveTracker />
    </MoveContextProvider>
  );
}

export default App;
