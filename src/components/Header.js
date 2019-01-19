import React from 'react';
import trollFace from '../resources/Trollface-PNG.png'

const Header = () => {
    
    return(
        <header>
            <img src={trollFace} alt="trollFace" />
            <p>Meme Generator</p>
        </header>
    )

}

export default Header;