import styled from "styled-components";

export const Nav = styled.nav`
  width: 60%;
  height: 90%;
  display: grid;
  place-items: center;
  color: var(--primary-white-clr);

  ul {
    padding: 1.5rem;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    li {
      border: none;
      border-left: 1px solid var(--primary-white-clr);
      text-transform: capitalize;
      display: grid;
      place-items: center;
      font-weight: 500;
      transition: 0.3s linear;

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

      &:last-child {
        border-right: 1px solid var(--primary-white-clr);
      }
    }
  }
`;
