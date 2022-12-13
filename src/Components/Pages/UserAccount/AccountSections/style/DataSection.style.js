import styled from "styled-components";
import { SharedKeyframes } from "../../../../../style/shared";
import { SharedButton } from "../../../../../style/shared";

export const DataSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;

  .name,
  .email,
  .avatar {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: calc(100% / 3);

    label,
    p {
      min-width: 90px;
      font-size: 1.2rem;
      color: var(--primary-grey-clr);
    }

    input,
    .upload {
      height: 27px;
      width: 350px;
      max-width: 350px;
      padding: 0 0.5rem;
      border: none;
      outline: none;
      font-size: 1.25rem;
      border-radius: 2px;

      &[type="file"] {
        display: none;
      }

      &[type="email"] {
        -webkit-animation: ${(props) =>
          props.emailError && SharedKeyframes.shake};
        -moz-animation: ${(props) => props.emailError && SharedKeyframes.shake};
        -o-animation: ${(props) => props.emailError && SharedKeyframes.shake};
        animation: ${(props) => props.emailError && SharedKeyframes.shake};
        animation-duration: 5.72s;
      }
    }

    .upload {
      position: relative;
      padding: 0;
      display: flex;
      align-items: center;

      label {
        display: block;
        text-align: center;
        height: 100%;
        min-width: 80px;
        max-width: 80px;
        transition: 0.3s linear;
        color: #fff;
        font-weight: bold;
        text-transform: capitalize;
        border: 1px solid #f12535;
        border-radius: 2px;
        cursor: pointer;
        opacity: 0.75;
        background-color: rgba(241, 37, 53, 0.3);

        &:hover {
          background-color: #f12535;
        }
        &:active {
          transform: scale(0.9);
        }
      }

      p {
        margin-left: 1rem;
        font-style: italic;
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .name,
    .email,
    .avatar {
      width: 90%;
    }
  }
  @media screen and (max-width: 900px) {
    .name,
    .email,
    .avatar {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 0;

    .name,
    .email,
    .avatar {
      label,
      p,
      input,
      .upload {
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    .name,
    .email,
    .avatar {
      label,
      p {
        min-width: 75px;
      }

      input,
      .upload {
        width: 280px;

        p {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (max-width: 550px) {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .name,
    .email,
    .avatar {
      height: calc(100% / 4);
    }
  }
`;

export const DataButton = styled(SharedButton)`
  position: relative;

  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 550px) {
    width: 41%;
    display: block;
    margin: 0 auto;
  }
`;
