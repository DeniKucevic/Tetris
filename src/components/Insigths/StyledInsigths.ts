import styled from "styled-components";
import bckground from "../../assets/images/bckground.jpg";

const StyledInsigths = styled.div`
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  background-color: darkslategrey;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
    url(${bckground});
  background-size: cover;
`;

const Label = styled.label`
  font-family: Mario Kart;
  font-size: calc(30px + 1vh);
  margin: 1vw 2vw 0vw 2vw;
  text-align: center;
  color: brown;
`;

const Display = styled.div`
  font-family: open24;
  font-size: calc(40px + 1vh);
  border: 1px solid black;
  margin: 0vh 2vw;
  text-align: right;
  background-color: #a6ae85;
  padding: 1vh 2vh;
`;

const DisplayNext = styled.div`
  border: 1px solid black;
  height: 20vh;
  margin: 0 25%;
  background-color: #a6ae85;
`;

const StartButton = styled.button`
  font-family: ka1;
  font-size: 2vh;
  letter-spacing: 4px;
  align-self: center;
  margin-top: 10%;
  width: 220px;
  height: 50px;
  border: 1px solid white;
  outline: none;
  color: #fff;
  background: black;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  :active {
    color: #000;
  }
  :active:after {
    background: transparent;
  }
  :hover:before {
    opacity: 1;
  }
  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export { StyledInsigths, Label, Display, DisplayNext, StartButton };
