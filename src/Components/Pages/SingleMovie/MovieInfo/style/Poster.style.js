import styled from "styled-components";

export const Poster = styled.div`
  width: 35%;
  min-width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 0.5rem;

  .date-time {
    height: 10%;
    color: #fff;
    display: flex;
    justify-content: space-between;

    .date,
    .time {
      p:last-child {
        color: #f12535;
      }
    }
    .time p {
      text-align: right;
    }
  }

  @media screen and (max-width: 940px) {
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
  background-color: #000;

  div {
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
      width: 30%;
      height: 30%;
      opacity: 1;
      filter: none;
      transition: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: ${(props) => (props.imgLoaded ? "1" : "0")};
    z-index: 1;
    filter: drop-shadow(0px 3px 10px #0a0f18);
    transition: 0.3s linear;
  }
`;
