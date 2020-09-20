interface Tetrominos {
  [index: string]: { shape: (number | string)[][], color: string }
}

export const TETROMINOES: Tetrominos = {
  A: {
    shape: [[0]],
    color: "0, 0, 0",
  },
  I: {
    shape: [
      [0, "1", 0, 0],
      [0, "1", 0, 0],
      [0, "1", 0, 0],
      [0, "1", 0, 0],
    ],
    color: "68, 255, 255",
  },
  J: {
    shape: [
      [0, "1", 0],
      [0, "1", 0],
      ["1", "1", 0],
    ],
    color: "36, 95, 223",
  },
  L: {
    shape: [
      [0, "1", 0],
      [0, "1", 0],
      [0, "1", "1"],
    ],
    color: "255, 136, 0",
  },
  O: {
    shape: [
      ["1", "1"],
      ["1", "1"],
    ],
    color: "255, 255, 68",
  },
  S: {
    shape: [
      [0, "1", "1"],
      ["1", "1", 0],
      [0, 0, 0],
    ],
    color: "68, 255, 68",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["1", "1", "1"],
      [0, "1", 0],
    ],
    color: "255, 68, 255",
  },
  Z: {
    shape: [
      ["1", "1", 0],
      [0, "1", "1"],
      [0, 0, 0],
    ],
    color: "227, 78, 78",
  },
};


export const randomTetromino = (): { shape: (Number | String)[][], color: String } => {
  const tetrominos = "IJLOSTZ";
  const randTetromino: string =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOES[randTetromino];
};
