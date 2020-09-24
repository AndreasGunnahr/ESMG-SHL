import styled from "styled-components";
import { CustomLink, logoFont, FlexRow } from "components/Shared";

export const NavbarContainer = styled(FlexRow)`
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.color.darkBlue};
  justify-content: space-between;
`;

export const Logo = styled(CustomLink)`
  ${logoFont}
  height: 100%;
  background: ${({ theme }) => theme.color.yellow};
  color: ${({ theme }) => theme.color.black};
  padding: 0 1rem;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  @media (min-width: 500px) {
    font-size: 3.25rem;
  }
`;

export const NavWrapper = styled(FlexRow)`
  display: block;
  margin-right: 1rem;
  // @media (min-width: 500px) {
  //   display: block;
  // }
`;

export const NavLink = styled(CustomLink)`
  color: ${({ theme }) => theme.color.white};
  margin-right: 1rem;
`;
