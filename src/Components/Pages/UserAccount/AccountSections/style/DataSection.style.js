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
`;

export const DataButton = styled(SharedButton)`
  position: relative;
`;
