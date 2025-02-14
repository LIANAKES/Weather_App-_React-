import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px;
  background: linear-gradient(0deg, rgba(18, 45, 77, 0.5), rgba(18, 45, 77, 0.5)),
              linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  border-bottom: 1px solid #D2D2D2;
  backdrop-filter: blur(17.8px);
`;

export const Header = styled.header`
 display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25.5px 85px;
  width: 100%;
  height: 80px;
  background-color: #2f5a6e;
  color: white;
`;

export const HeaderLogoContainer = styled.div`
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29.05px;
  letter-spacing: 0%;
  white-space: nowrap;
`;

export const NavContainer = styled.nav`
   display: flex;
  gap: 40px;
`;


export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Inter, sans-serif;
  font-size: 20px;
  line-height: 24.2px;
  letter-spacing: 0%;
  color: white;
  
  &:first-of-type {
    font-weight: 700;
  }

  &:last-of-type {
    font-weight: 400;
  }

  &:hover {
    color: #ff6347;
  }
`;


