import styled from "styled-components";

const GamePageContainer = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: space-around;
  -ms-flex-line-pack: distribute;
  align-content: space-around;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
`;

export default GamePageContainer;
