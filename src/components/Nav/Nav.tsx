import React from "react";
import styled from "styled-components";
import { Box } from "@theme/components/Box";
import { colors } from "@theme/styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavSubMenu from "@components/NavSubMenu/NavSubMenu";
import {
  StyledUserMenu, StyledHamburgerMenu
} from "./Nav.style";

type NavbarProps = {
  links?: React.ReactNode;
};


const Nav = ({links} : NavbarProps) => {
  links = [
    { title: "Hello World", target: "https://www.google.com/search?q=hello" },
    { title: "Hello Berlin", target: "https://www.google.com/search?q=berlin" },
  ];

  const StyledNavbar = styled.nav`
    display: flex;
    height: 70px;
    background-color: #009688;
    justify-content: flex-end;
    padding: 10px;
  `;

const UserMenu = ({ links }: NavbarProps) => {
  return <NavSubMenu StyledMenu={StyledUserMenu} iconName={FontAwesomeIcon}>
    Stuff that goes in the panel
  </NavSubMenu>;
}

const HamburgerMenu = ({ links }: NavbarProps) => {
  return <NavSubMenu StyledMenu={StyledHamburgerMenu} iconName={FontAwesomeIcon}>
    <ul><li>{links}</li><li>links</li></ul>
  </NavSubMenu>;
}


  return (
    <StyledNavbar>
      <UserMenu links={links} />
      <HamburgerMenu links={links} />
    </StyledNavbar>
  );
};

export default Nav;
