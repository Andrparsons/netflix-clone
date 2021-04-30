import styled, { createGlobalStyle } from "styled-components";

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;

export const Spinner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: 999;

  :after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-image: url(/images/misc/spinner.png);
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -9.375rem;
    margin-left: -4.6875rem;
    width: 9.375rem;
    height: 9.375rem;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Picture = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6.25rem;
  margin-left: -1.375rem;
`;
