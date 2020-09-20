export const STAGE_WIDTH = 10;
export const STAGE_HEIGHT = 20;

export const createMatrix = () => {
  let matrix = [];
  for (let i = 0; i < STAGE_HEIGHT; i++) {
    let row = [];
    for (let j = 0; j < STAGE_WIDTH; j++) {
      row.push([0, "clear"]);
    }
    matrix.push(row);
  }
  return matrix;
};
