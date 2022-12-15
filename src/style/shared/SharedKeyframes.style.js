import { keyframes } from "styled-components";

export const shake = keyframes`
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(8px, 0);
  }
  3.57143% {
    transform: translate(0, 0);
  }
  5.35714% {
    transform: translate(8px, 0);
  }
  7.14286% {
    transform: translate(0, 0);
  }
  8.92857% {
    transform: translate(8px, 0);
  }
  10.71429% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const fade1 = keyframes`
    0% {
      filter: contrast(100%);
    }

    25% {
      filter: contrast(0);
    }

    50% {
      filter: contrast(0);
    }

    75% {
      filter: contrast(0);
    }

    100% {
      filter: contrast(100%);
    }
    `;

export const fade2 = keyframes`
    0% {
      filter: contrast(0);
    }

    25% {
        filter: contrast(100%);
    }

    50% {
      filter: contrast(0);
    }

    75% {
      filter: contrast(0);
    }

    100% {
      filter: contrast(0);
    }`;

export const fade3 = keyframes`
    0% {
      filter: contrast(0);
    }

    25% {
        filter: contrast(0);
    }

    50% {
        filter: contrast(100%);
    }

    75% {
      filter: contrast(0);
    }

    100% {
      filter: contrast(0);
    }`;

export const fade4 = keyframes`
    0% {
      filter: contrast(0);
    }

    25% {
        filter: contrast(0);
    }

    50% {
        filter: contrast(0);
    }

    75% {
        filter: contrast(100%);
    }

    100% {
      filter: contrast(0);
    }`;

export const scale1 = keyframes`
  0% {
        transform: scale(1.0);
        color: var(--primary-white-clr);

    }
    50%{
        transform: scale(1.1);
        color: var(--primary-red-clr);
    }
    100% {
        transform: scale(1.0);
        color: var(--primary-white-clr);
    }
`;

export const scale2 = keyframes`
  0% {
        transform: scale(1.0);
    }
    50%{
        transform: scale(1.05);
    }
    100% {
        transform: scale(1.0);
    }
`;
