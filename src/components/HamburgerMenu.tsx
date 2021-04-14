import React, {useState} from 'react'

const HamburgerMenu = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu=()=>{
        setShowMenu(!showMenu)
    }

    console.log('showMenu', showMenu)

    return (
        <div>
            <button aria-label="Open and Close Menu" onClick={handleShowMenu}>x</button>
            {showMenu && <div>Menu!</div>}
        </div>
    )
}

export default HamburgerMenu
