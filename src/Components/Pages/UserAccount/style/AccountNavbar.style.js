import styled from "styled-components";
import { SharedSection } from "../../../../style/shared";

export const AccountNavbar = styled(SharedSection)`
  margin-top: 0;
  padding-bottom: 0;
`;

export const Header = styled.header`
  width: 100%;
  height: 6vh;

  nav {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    ul {
      width: 50%;
      height: 100%;
      padding: 0.5rem 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      li {
        font-size: 1.1rem;
        border: none;
        border-left: 1px solid var(--primary-white-clr);
        text-transform: capitalize;
        display: grid;
        place-items: center;

        &:last-child {
          border-right: 1px solid var(--primary-white-clr);
        }
        p {
          transition: all 0.1s linear;
          cursor: pointer;

          &.active,
          &:hover {
            color: var(--primary-red-clr);
          }
        }
      }
    }
  }
`;
