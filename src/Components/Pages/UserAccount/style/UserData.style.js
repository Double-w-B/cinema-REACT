import styled from "styled-components";

export const UserData = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 600px) {
    height: 30vh;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }
`;

export const ImgContainer = styled.div`
  width: 25%;
  height: 100%;
  display: grid;
  place-items: center;

  .img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--primary-grey-clr);
    filter: drop-shadow(0px 0px 10px black);
    transition: 0.3s linear;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      color: transparent;
      transform: ${(props) =>
        props.email?.split("@")[1].slice(0, 5) === "gmail" &&
        !props.storedAvatar &&
        "translateY(-1.5px)"};
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 700px) {
    width: 30%;
  }

  @media screen and (max-width: 600px) {
    width: 100px;
    height: 100px;
    position: relative;

    .img {
      width: 100px;
      height: 100px;
      position: absolute;
      top: -2rem;
      right: 50%;
      transform: translateX(50%);
    }
  }
`;

export const DataContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;

  p {
    font-size: 1.2rem;
    transition: 0.3s linear;

    &.empty {
      color: var(--primary-grey-clr);
      font-style: italic;
    }

    span {
      width: 70px;
      font-style: normal;
      display: inline-block;
      margin-right: 1rem;
      color: var(--primary-grey-clr);
    }
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 700px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem 0 0 0;
    width: 100%;
    height: calc(100% - 20px);
  }

  @media screen and (max-width: 500px) {
    padding: 1rem 0 0 0;
  }
`;
