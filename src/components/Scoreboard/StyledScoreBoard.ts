import styled from "styled-components";
import bckground from "../../assets/images/bckground.jpg";

const ScoreBoardWrapper = styled.div`
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url(${bckground});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: ka1;
  margin: 0px;
  color: brown;
`;

const ScoresDiv = styled.div`
  width: 20vw;
  height: 80vh;
  margin: 0px;
  background-color: gray;
  border: 2px solid black;
  opacity: 0.3;
`;

export { ScoreBoardWrapper, Title, ScoresDiv };
