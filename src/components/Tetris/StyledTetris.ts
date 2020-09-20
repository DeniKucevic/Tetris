import styled from "styled-components";

export const StyledTetris = styled.div`
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  border: 4px solid gray;
`;

export const RowContainer = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`;
