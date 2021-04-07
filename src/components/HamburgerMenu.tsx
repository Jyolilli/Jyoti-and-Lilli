import React, {useState} from 'react'

const HamburgerMenu = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleClick=()=>{
        setShowMenu(!showMenu)
    }

    console.log('showMenu', showMenu)

    return (
        <div>
            <button onClick={handleClick}>x</button>
            {showMenu && <div>Menu!</div>}
        </div>
    )
}

export default HamburgerMenu
