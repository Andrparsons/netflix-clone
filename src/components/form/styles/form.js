import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 3.75rem 4.25rem 2.5rem;
  margin-bottom: 6.25rem;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.75rem;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 1rem;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 0.625rem;
  font-size: 0.8125rem;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReachRouterLink)`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Error = styled.div`
  background: #387c03;
  border-radius: 4px;
  font-size: 0.875rem;
  margin: 0 0 1rem;
  color: #ffffff;
  padding: 1rem 1.25rem;
`;

export const Input = styled.input`
  background: #333333;
  border-radius: 4px;
  border: 0;
  color: #ffffff;
  height: 3.125rem;
  line-height: 3.125rem;
  padding: 0.3125rem 1.25rem;
  margin-bottom: 1.25rem;

  &:last-of-type {
    margin-bottom: 1.875rem;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 0.75rem;
  padding: 1rem;
  border: 0;
  color: #ffffff;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
