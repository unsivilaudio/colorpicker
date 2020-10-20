import React from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends React.Component {
    state = { format: 'hex' };

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
        return (
            <div className='Palette'>
                <h1>Single Color Palette</h1>
                <div className='Palette-colors'>{this.renderColorBox()}</div>
            </div>
        );
    }
}

export default SingleColorPalette;
