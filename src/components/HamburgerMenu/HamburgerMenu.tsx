import React, { useState } from "react";
import { Box } from "@theme/components/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StyledHamburgerMenu,
  StyledLink,
  StyledButton,
} from "./HamburgerMenu.style";
import { colors } from "@theme/styles/colors";

type HamburgerMenuProps = {
  links: {
    title?: string;
    target?: string;
  }[];
};

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const { links } = props;

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log("showMenu", showMenu);

  return (
    <Box mr={3} mt={2} lineHeight="6px">
        {!showMenu &&
      <FontAwesomeIcon
        icon="bars"
        aria-label="Open and Close Menu"
        size="3x"
        color={colors.blue}
        onClick={handleShowMenu}
      />}
      {showMenu && (
        <StyledHamburgerMenu>
          {links.map((link) => (
            <StyledLink href={link.target}>{link.title}</StyledLink>
          ))}
          <StyledButton onClick={handleShowMenu}>x</StyledButton>
        </StyledHamburgerMenu>
      )}
    </Box>
  );
};

export default HamburgerMenu;
