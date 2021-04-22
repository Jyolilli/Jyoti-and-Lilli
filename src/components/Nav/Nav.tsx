import React from "react";
import { Box } from "@theme/components/Box";
import { colors } from "@theme/styles/colors";
import HamburgerMenu from "@components/HamburgerMenu/HamburgerMenu";

const Nav = () => {
  const links = [
    { title: "Hello World", target: "https://www.google.com/search?q=hello" },
    { title: "Hello Berlin", target: "https://www.google.com/search?q=berlin" },
  ];
  return (
    <Box
      display="flex"
      position="relative"
      top="0"
      width="100%"
      height="70px"
      backgroundColor={colors.lightBlue}
      justifyContent="flex-end"
    >
      <HamburgerMenu links={links} />
    </Box>
  );
};

export default Nav;
