import React from "react";
import styled from "styled-components";
import { Box } from "@theme/components/Box";
import { colors } from "@theme/styles/colors";
import HamburgerMenu from "@components/HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const links = [
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

  return (
    <StyledNavbar>
      <HamburgerMenu links={links} />
    </StyledNavbar>
  );
};

export default Navbar;
