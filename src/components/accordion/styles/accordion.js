import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  border-bottom: 0.5rem solid #222222;
`;

export const Frame = styled.div`
  margin-bottom: 2.5rem;
`;

export const Inner = styled.div`
  display: flex;
  padding: 4.5rem 3.5rem;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Item = styled.div`
  color: #ffffff;
  margin-bottom: 0.625rem;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #ffffff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 1.625rem;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  max-width: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 1.625rem;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.375;
  }
`;
