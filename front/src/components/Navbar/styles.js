import { Container, Nav, Navbar, NavbarBrand, NavItem } from "react-bootstrap";
import { FaBars, FaCanadianMapleLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { md } from "../../styles/global";

const color = "#151515";
export const ContainerNavBar = styled(Navbar)`
  position: relative !important;
  transition: 0.3s ease-in-out;
  background: ${color};
  padding: 10px;
  button {
    svg {
      color: #ffffff;
    }
  }
  a {
    color: #ffffff;
    &:hover {
      color: #ffffff;
    }
  }
`;
export const Icon = styled(FaCanadianMapleLeaf)`
  font-size: 40px;
  margin-right: 20px;
`;

export const NewContainer = styled(Container)`
  padding: 5px 0px;
`;
export const NewNav = styled(Nav)`
  @media (max-width: ${md}px) {
    text-align: center;
  }
`;
export const NewNavLink = styled(Link)``;
export const NewNavItem = styled(NavItem)`
  font-weight: bold;
  transition: 0.3s ease-in-out;
  padding: 0px !important;
  border-bottom: 2px solid transparent;
  line-height: 1.9;
  margin-right: 40px;
  &:hover {
    border-bottom: 2px solid white;
  }
  @media (max-width: ${md}px) {
    margin: auto;
  }
`;
export const Brand = styled(NavbarBrand)`
  color: white !important;
  align-items: baseline;
  display: flex;
  font-size: 30px;
  a {
    padding: 0px;
    color: white !important;
  }
`;
export const IconBars = styled(FaBars)`
  font-size: 22px;
`;
