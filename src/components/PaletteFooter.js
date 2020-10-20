import React from 'react';

const paletteFooter = props => {
    return (
        <footer className='Palette-footer'>
            {props.paletteName}
            <span className='emoji'>{props.emoji}</span>
        </footer>
    );
};

export default paletteFooter;
