import styled from "styled-components";

const StyledMenuModal = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 1.5rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: ${(props) => (props.isMenuModal ? "0" : "-100%")};
  background-color: var(--primary-white-clr);
  visibility: ${(props) => (props.isMenuModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.isMenuModal ? "1" : "0")};
  transition: all 0.5s ease-out;
  z-index: 11;
  background: #080c13;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #080c13, #2b3444, #080c13);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 3px;

  .menu {
    width: 100%;
    height: 10vh;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--primary-grey-clr);

    p {
      cursor: default;
    }

    svg {
      font-size: 1.8rem;
      cursor: pointer;
      opacity: 0.8;
      transition: all 0.1s linear;

      &:hover {
        opacity: 1;
      }

      &:active {
        transform: scale(0.8);
      }
    }
  }

  ul {
    padding: 1.5rem;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    li {
      width: 40%;
      margin: 0 auto;
      border: none;
      text-transform: capitalize;
      display: grid;
      place-items: center;
      font-weight: 500;
      transition: 0.3s linear;

      &:hover {
        width: 50%;
        transition: 0.5s linear;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
      }

      a,
      p {
        font-size: 1.1rem;
        color: var(--primary-white-clr);
        letter-spacing: 0.5px;
        transition: all 0.1s linear;
        cursor: pointer;

        &:hover {
          color: var(--primary-red-clr) !important;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 76%;

    .menu {
      font-size: 1.4rem;
      svg {
        font-size: 2.2rem;
      }
    }

    ul li {
      width: 65%;
      &:hover {
        width: 75%;
      }
    }
  }
`;

export default StyledMenuModal;
