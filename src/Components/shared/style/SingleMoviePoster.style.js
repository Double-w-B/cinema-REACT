import styled from "styled-components";
import { SharedButton } from "../../../style/shared";

const StyledSinglePoster = styled.div`
  position: relative;
  width: ${(props) => props.comingSoonClass && "200px"};
  height: ${(props) => props.comingSoonClass && "95%"};
  min-height: 300px;
  flex: ${(props) => props.comingSoonClass && "0 0 auto"};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    margin-right: ${(props) => props.comingSoonClass && "150px"};
  }

  img {
    width: 100%;
    min-height: 90%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.2s linear;
    color: transparent;
    z-index: 1;
  }

  div:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    cursor: ${(props) => props.comingSoonClass && !props.mouseActive && "grab"};
  }

  div:active {
    cursor: ${(props) => props.comingSoonClass && "grabbing"};
  }

  &:hover a p {
    text-decoration: underline;
    text-decoration-color: #f12535;
  }

  a {
    margin-top: 0.3rem;
    min-height: 10%;
    display: flex;
    align-self: center;

    &:hover ~ div {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.8);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
  }

  p {
    color: #fff;
    text-align: center;
    z-index: 1;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #f12535;
      -webkit-text-decoration-color: #f12535;
    }
  }
`;

const ImgLayer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: ${(props) => (props.imgLoaded ? "0" : "1")};
  z-index: ${(props) => (props.imgLoaded ? "0" : "2")};

  img {
    object-fit: contain;
    width: 80%;
    height: 80%;
  }
`;

const ButtonLayer = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s linear;
  background-color: transparent;
  opacity: 0;
  z-index: 1;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.8);
  }

  a {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Button = styled(SharedButton)`
  width: 100%;
  font-size: 1.2rem;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:active {
    transform: translate(-50%, -50%) scale(0.9);
  }
`;

StyledSinglePoster.ImgLayer = ImgLayer;
StyledSinglePoster.ButtonLayer = ButtonLayer;
StyledSinglePoster.Button = Button;

export default StyledSinglePoster;
