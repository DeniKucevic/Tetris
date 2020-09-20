import { useState, useEffect } from "react";
import { updateShorthandPropertyAssignment } from "typescript";
import { createMatrix } from "../gameHelpers";

export const useStage = (tetromino: { position: { x: number; y: number; }; tetromino: (String | Number)[][]; collided: boolean; } | (({ x, y, collided }: { x: any; y: any; collided: any; }) => void)) => {
  const [stage, setStage] = useState(createMatrix());

  useEffect(() => {
    const updateStage = (prevStage: any[][]) => {
      const newStage = prevStage.map((row: any[]) =>
        row.map(cell => (
          cell[1] === 'clear' ? [0, 'clear'] : cell)),
      );
      return newStage;
    };

    setStage(prev => updateStage(prev))
  }, [tetromino])

  return [stage, setStage];
};
