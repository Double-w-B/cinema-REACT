import styled from "styled-components";

export const LogIn = styled.div`
  width: 20%;
  height: 100%;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  color: var(--primary-grey-clr);

  svg {
    font-size: 1.6rem;
    margin-right: 0.5rem;
    transition: all 0.2s linear;
    color: var(--primary-grey-clr);

    &:hover + button {
      color: var(--primary-white-clr);
    }
  }

  button {
    font-size: 1.2rem;
    border: none;
    color: var(--primary-grey-clr);
    background-color: transparent;
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
      color: var(--primary-white-clr);
    }
    &:active {
      transform: scale(0.8);
    }
  }

  .isLogged {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid var(--primary-grey-clr);
      box-shadow: 0px 0px 10px #0a0f18;

      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        border-radius: 50%;
        transition: all 0.3s linear;
        transform: ${(props) =>
          props.email?.split("@")[1].slice(0, 5) === "gmail" &&
          !props.avatar &&
          "translateY(-0.5px)"};
      }
    }

    .user {
      width: calc(100% - 60px);
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      color: var(--primary-white-clr);

      p {
        word-break: break-all;
      }
      button {
        font-size: 1rem;
        position: absolute;
        bottom: 0.5rem;
        right: 2.5rem;
      }
    }
  }
`;