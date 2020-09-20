import React from "react";
import styled from "styled-components";

const CellWrap = styled.div`
  background: rgba(${(props) => props.color});
  border: 1px solid rgb(25, 26, 25);
  margin: 1px;
  color: white;
  font-weight: bold;
  text-align: center;
  flex: 1 1 auto;
  height: auto;
  border-radius: 10%;
  :before {
    display: table;
    content: "";
    float: left;
    padding-top: 100%;
  }
`;

interface Props {
  type: { color: string; shape: (number | string)[] };
}

const Cell: React.FC<Props> = ({ type }) => {
  return <CellWrap color={type.color}></CellWrap>;
};

export default React.memo(Cell);
