import React from "react";
import { ScoreBoardWrapper, Title, ScoresDiv } from "./StyledScoreBoard";

const ScoreBoard: React.FC = () => {
  return (
    <ScoreBoardWrapper>
      <Title>SCOREBOARD</Title>
      <ScoresDiv />
    </ScoreBoardWrapper>
  );
};

export default ScoreBoard;
