import { keyframes, css } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const yoyo = keyframes`
  from {
    transform:  rotate(0deg),scale: 0;
  }

  to {
    transform: rotate(360deg),scale: 1;
  }
`;

const rotateAnimation = props =>
  css`
    ${yoyo} 2s linear infinite;
  `;

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export { rotateAnimation, pulse };
