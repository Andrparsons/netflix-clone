import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.5rem solid #222222;
  text-align: center;
  padding: 10.375rem 2.875rem;
  max-width: 815px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #ffffff;
  max-width: 640px;
  font-size: 3.125rem;
  font-weight: 700;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 2.25rem;
  }
`;

export const SubTitle = styled.h2`
  color: #ffffff;
  font-size: 1.625rem;
  font-weight: normal;
  margin: 1rem auto;

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`;
