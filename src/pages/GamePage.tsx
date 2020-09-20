import React from "react";
import GamePageContainer from "../components/GamePageContainer";
import Insights from "../components/Insigths/Insights";
import ScoreBoard from "../components/Scoreboard";
import Tetris from "../components/Tetris";

const GamePage: React.FC = () => {
  return (
    <GamePageContainer>
      <ScoreBoard />
      <Tetris />
      <Insights />
    </GamePageContainer>
  );
};

export default GamePage;
