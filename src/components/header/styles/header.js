import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background:none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 3.5rem;
  height: 4rem;
  padding: 1.125rem 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 1.875rem;
  }
`;

export const Link = styled.p`
  color: #ffffff;
  text-decoration: none;
  margin-right: 1.875rem;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 5.25rem;
  height: fit-content;
  color: #ffffff;
  border: 0;
  border-radius: 0.1875rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  line-height: 1.3;

  &:hover {
    background: #f40612;
  }
`;

export const Logo = styled.img`
  height: 2rem;
  width: 6.75rem;
  margin-right: 2.5rem;

  @media (min-width: 1449px) {
    height: 2.875rem;
    width: 10.5rem;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 1.375rem;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;
