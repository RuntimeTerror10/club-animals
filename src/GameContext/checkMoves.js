export const checkMoves = (moves) => {
  const animal = moves[0].name;
  const isMatch = moves.every((move) => move.name === animal);
  return isMatch;
};
