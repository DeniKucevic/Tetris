import { useCallback, useState } from "react";
import { STAGE_HEIGHT, STAGE_WIDTH } from "../gameHelpers";
import { randomTetromino } from "../TETROMINOES";

export const useTetromino = () => {
  const [tetromino, setTetromino] = useState({
    position: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });



  const resetTetromino = useCallback(() => {
  }, [])

  return [tetromino, resetTetromino];
};
