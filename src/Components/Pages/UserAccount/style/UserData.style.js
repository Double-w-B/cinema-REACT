import styled from "styled-components";

export const UserData = styled.div`
  height: 20vh;
  display: flex;
  margin-bottom: 1rem;
  background-color: rgba(43, 52, 68, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
`;

export const DataContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  padding: 1rem 0;

  p {
    font-size: 1.2rem;
  }

  .structure,
  .user-data {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      color: var(--primary-grey-clr);
    }
  }
  .structure {
    margin-right: 1.2rem;
  }
  .user-data {
    p {
      color: var(--primary-white-clr);

      &.empty {
        color: var(--primary-grey-clr);
        font-style: italic;
      }
    }
  }
`;
