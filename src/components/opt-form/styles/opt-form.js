import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 1.25rem;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 0.625rem;
  height: 70px;
  box-sizing: border-box;
  font-size: 1rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: #ffffff;
  text-transform: uppercase;
  padding: 0 2rem;
  font-size: 1.625rem;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 0.625rem;
    filter: brightness(0) invert(1);
    width: 1.5rem;

    @media (max-width: 1000px) {
      width: 1rem;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 1rem;
    margin-top: 1.25rem;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 1.25rem;
  color: #ffffff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.375;
  }
`;
