import React from 'react';

import Navbar from './nav/NavBar';
import ColorBox from './ColorBox';
import '../styles/Palette.css';

class Palette extends React.Component {
    state = { level: 500 };

    changeLevel = level => {
        this.setState({ level });
    };

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map((color, i) => {
            return (
                <ColorBox key={i} background={color.hex} name={color.name} />
            );
        });
        return (
            <div className='Pallete'>
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className='Pallete-colors'>{colorBoxes}</div>
            </div>
        );
    }
}

export default Palette;
