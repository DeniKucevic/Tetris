import React from "react";
import {
  Display,
  DisplayNext,
  Label,
  StartButton,
  StyledInsigths,
} from "./StyledInsigths";

const Insights: React.FC = () => {
  return (
    <StyledInsigths>
      <Label>POINTS</Label>
      <Display>1234</Display>
      <Label>CLEARS</Label>
      <Display>10</Display>
      <Label>LEVEL</Label>
      <Display>12</Display>
      <Label>NEXT</Label>
      <DisplayNext></DisplayNext>
      <StartButton>START!</StartButton>
    </StyledInsigths>
  );
};

export default Insights;
