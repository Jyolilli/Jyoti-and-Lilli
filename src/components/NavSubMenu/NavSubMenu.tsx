import React, {useState} from 'react'
import { Box } from "@theme/components/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StyledHamburgerMenu,
  StyledLink,
  StyledCloseButton,
  StyledIcon,
} from "../HamburgerMenu/HamburgerMenu.style";
import { colors } from "@theme/styles/colors";

const NavSubMenu = ({ StyledMenu, children } : any) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
      };
    return (
        <Box mr={3} mt={2} lineHeight="6px">
        {!showMenu && (
          <FontAwesomeIcon
            icon="bars"
            aria-label="Open and Close Menu"
            size="3x"
            color={colors.blue}
            onClick={handleShowMenu}
          />
        )}
        {showMenu && (
          <StyledMenu>
            {children}
            <StyledCloseButton onClick={handleShowMenu}>x</StyledCloseButton>
          </StyledMenu>
        )}
      </Box>
    )
}

export default NavSubMenu
