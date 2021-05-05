import styled from "styled-components";

export const Title = styled.p`
  font-size: 1.5rem;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 3.5rem;
  margin-right: 3.5rem;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.125rem;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 1.875rem;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -9.375rem;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 0.75rem;
  color: #ffffff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 0.3125rem;
  font-size: 0.625rem;
  color: #ffffff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Meta = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0.625rem;
  background-color: #0000008f;
  display: none;
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  margin: 0;
  padding: 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.3125rem;
  position: relative;
  cursor: pointer;
  transition: transform 0.2;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1000px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 3.5rem;

    @media (max-width: 1000px) {
      margin-left: 1.875rem;
    }
  }

  &:last-of-type {
    margin-right: 3.5rem;

    @media (max-width: 1000px) {
      margin-right: 1.875rem;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 1.125rem;
  color: #ffffff;
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : "normal"};
  margin: 0;

  @media (max-width: 800px) {
    line-height: 1.375rem;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: #000000;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 1.25rem;
      line-height: 1.25rem;
      margin-bottom: 0;
    }

    ${FeatureText} {
      font-size: 0.875rem;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: #ffffff;
  position: absolute;
  right: 1.125rem;
  top: 1.125rem;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Content = styled.p`
  margin: 3.5rem;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 1.875rem;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? "red" : "green")};
  border-radius: 0.9375rem;
  width: 1.125rem;
  padding: 0.3125rem;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
  margin-right: 0.625rem;
  font-size: 0.75rem;
`;
