import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div``;

export const Link = styled.p``;

export const ButtonLink = styled(ReachRouterLink)``;

export const Logo = styled.img`
  height: 2rem;
  width: 6.75rem;
  margin-right: 2.5rem;

  @media (min-width: 1449px) {
    height: 2.875rem;
    width: 10.5rem;
  }
`;
