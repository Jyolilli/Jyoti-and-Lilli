import React, {useState} from 'react' 
import {
    StyledHamburgerLabel,
    StyledHamburgerIcon
  } from "./HamburgerMenu.style";

  type HamburgerMenuProps = {
      links: {
        title?: string;
        target?: string;
      }[];   
  };

const HamburgerMenu = (props: HamburgerMenuProps) => {
    const { links } = props;

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu=()=>{
        setShowMenu(!showMenu)
    }

    console.log('showMenu', showMenu)

    return (
        <div>
            <StyledHamburgerIcon aria-label="Open and Close Menu" onClick={handleShowMenu}></StyledHamburgerIcon>
            {showMenu && <StyledHamburgerLabel>{links.map(link => <a href={link.target}>{link.title}</a>)}</StyledHamburgerLabel>}
        </div>
    )
}

export default HamburgerMenu
