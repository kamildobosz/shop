import { css } from "styled-components";

export const tablet = (props) => {
    return css `
    @media screen and (min-width: 768px) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
    return css `
    @media screen and (min-width: 1280px) {
      ${props}
    }
  `;
};