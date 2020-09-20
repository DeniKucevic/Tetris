import React, { useState } from "react";
import Cell from "./Cell";

import { createMatrix } from "../../gameHelpers";

import { StyledTetris, RowContainer } from "./StyledTetris";

import { useTetromino } from "../../hooks/useTetromino";
import { useStage } from "../../hooks/useStage";

const Tetris: React.FC = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [tetromino, updateTetrominoPos, resetTetromino] = useTetromino();
  const [stage, setStage] = useStage(tetromino);


  return (
    <StyledTetris>
      {createMatrix().map((row: any[], rowX: number) => {
        return (
          <RowContainer key={rowX}>
            {row.map((cell: any[], cellX: Number) => {
              return <Cell type={cell[0]} key={`${rowX}:${cellX}`} />;
            })}
          </RowContainer>
        );
      })}
    </StyledTetris>
  );
};

export default Tetris;
