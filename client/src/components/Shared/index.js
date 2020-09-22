import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "constant";

export const headerFont = css`
  font-family: "Russo One", sans-serif;
`;

export const textFont = css`
  font-family: "Roboto", sans-serif;
`;

export const logoFont = css`
  font-family: "Squada One", cursive;
`;

export const TextField = styled.textarea``;

export const Input = styled.input`
  ${textFont};
`;

export const CustomLink = styled(Link)`
  ${headerFont}
  font-size: 1rem;
  color: ${theme.color.white};
  text-decoration none;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  ${textFont};
`;

export const H1 = styled.h1`
  ${headerFont};
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
