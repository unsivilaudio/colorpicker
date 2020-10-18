import React from 'react';

import ColorBox from './ColorBox';
import '../styles/Palette.css';

const palette = props => {
    const colorBoxes = props.colors.map((color, i) => {
        return <ColorBox key={i} background={color.color} name={color.name} />;
    });

    return (
        <div className='Pallete'>
            <div className='Pallete-colors'>{colorBoxes}</div>
        </div>
    );
};

export default palette;
