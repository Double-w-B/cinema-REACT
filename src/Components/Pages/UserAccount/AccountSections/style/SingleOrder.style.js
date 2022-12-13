import styled from "styled-components";

export const SingleOrder = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  display: flex;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.1s linear;
  transform: scale(0.995);

  &:hover {
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  }

  @media screen and (max-width: 768px) {
    min-height: 200px;
  }
`;

export const ImgContainer = styled.div`
  width: 100px;
  height: 100%;
  position: relative;

  &:hover {
    & img {
      filter: brightness(70%);
      box-shadow: 0px 5px 10px black;
    }

    & svg {
      font-size: 3rem;
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: 0.3s linear;
    box-shadow: 0px 5px 8px black;
    filter: brightness(100%);

    &:hover {
      filter: brightness(70%);
      box-shadow: 0px 5px 10px black;
    }
  }

  svg {
    font-size: 2rem;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: pointer;
    opacity: 0.3;
    transition: 0.3s linear;
    color: var(--primary-white-clr);

    &:hover {
      font-size: 3rem;
      opacity: 1;
    }

    &:active {
      transition: font-size 0.5s linear;
      font-size: 3rem;
    }
  }
`;

export const OrderInfo = styled.div`
  width: calc(100% - 100px);
  height: 100%;

  h2 {
    margin-left: 1.3rem;

    a {
      color: var(--primary-white-clr);
      transition: 0.3s linear;

      &:hover {
        color: var(--primary-red-clr);
      }
    }
  }

  .info {
    width: 100%;
    height: calc(100% - 32px);
    padding-left: 1rem;
    display: flex;

    .info__details {
      width: 65%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      p {
        display: flex;
        align-items: center;

        span {
          width: 100px;
          min-width: 100px;
          height: 100%;
          display: inline-block;
          padding-left: 0.5rem;
          color: var(--primary-grey-clr);
        }

        svg {
          width: 1rem;
          margin-left: 0.5rem;
          color: ${(props) =>
            props.status ? "green" : "var(--primary-red-clr)"};
          filter: drop-shadow(0px 0px 2px black);
        }
      }
    }

    .info__payment {
      width: 65%;
      height: 100%;
      display: flex;
      justify-content: flex-end;

      .info__payment_order,
      .info__payment_status {
        width: 120px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        p {
          display: flex;
          align-items: center;

          &:first-child {
            color: var(--primary-grey-clr);
          }

          svg {
            width: 1rem;
            margin-left: 0.5rem;
            color: ${(props) =>
              props.status ? "green" : "var(--primary-red-clr)"};
            filter: drop-shadow(0px 0px 2px black);
          }
        }
      }
    }

    .info__details .info__details_labels p,
    .info__payment_order p:first-child,
    .info__payment_status p:first-child {
      -webkit-touch-callout: none;
      /* iOS Safari */
      -webkit-user-select: none;
      /* Safari */
      -khtml-user-select: none;
      /* Konqueror HTML */
      -moz-user-select: none;
      /* Old versions of Firefox */
      -ms-user-select: none;
      /* Internet Explorer/Edge */
      user-select: none;
    }
  }

  @media screen and (max-width: 900px) {
    .info .info__payment {
      width: 55%;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      margin-bottom: 0.3rem;
    }

    .info {
      .info__details {
        width: 100%;
        min-width: unset;

        p {
          span {
            width: 85px;
            min-width: 85px;
          }
        }
      }

      .info__payment {
        display: none;
      }
    }
  }
`;
