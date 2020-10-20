import React from 'react';
import { Link } from 'react-router-dom';

import ColorBox from './ColorBox';
import Navbar from './nav/NavBar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends React.Component {
    state = { format: 'hex' };

    handleChangeFormat = e => {
        this.setState({ format: e.target.value });
    };

    renderColorBox = () => {
        const { shades } = this.props;
        return shades.map(box => {
            return (
                <ColorBox
                    key={box.id}
                    name={box.name}
                    background={box[this.state.format]}
                    showMore={false}
                />
            );
        });
    };

    render() {
        const { paletteName, paletteId, emoji } = this.props;

        return (
            <div className='SingleColorPalette Palette'>
                <Navbar
                    changeFormat={this.handleChangeFormat}
                    format={this.state.format}
                />
                <div className='Palette-colors'>
                    {this.renderColorBox()}
                    <div className='go-back ColorBox'>
                        <Link
                            to={`/palette/${paletteId}`}
                            className='back-button'>
                            Go Back
                        </Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;
