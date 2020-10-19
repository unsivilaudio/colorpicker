import React from 'react';

import Navbar from './nav/NavBar';
import ColorBox from './ColorBox';
import '../styles/Palette.css';

class Palette extends React.Component {
    state = { level: 500, format: 'hex' };

    changeLevel = level => {
        this.setState({ level });
    };

    handleChangeFormat = e => {
        this.setState({ format: e.target.value });
    };

    render() {
        const { colors, paletteName, emoji } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map((color, i) => {
            return (
                <ColorBox
                    key={color.id}
                    background={color[format]}
                    name={color.name}
                />
            );
        });
        return (
            <div className='Palette'>
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    changeFormat={this.handleChangeFormat}
                    format={format}
                />
                <div className='Palette-colors'>{colorBoxes}</div>
                <footer className='Palette-footer'>
                    {paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        );
    }
}

export default Palette;
