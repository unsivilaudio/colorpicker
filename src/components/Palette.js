import React from 'react';
import { withStyles } from '@material-ui/styles';

import PaletteFooter from './PaletteFooter';
import Navbar from './nav/NavBar';
import ColorBox from './ColorBox';

import Styles from '../styles/PaletteStyles';

class Palette extends React.Component {
    state = { level: 500, format: 'hex' };

    changeLevel = level => {
        this.setState({ level });
    };

    handleChangeFormat = e => {
        this.setState({ format: e.target.value });
    };

    render() {
        const { classes } = this.props;
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { level, format } = this.state;

        const colorBoxes = colors[level].map((color, i) => {
            return (
                <ColorBox
                    key={color.id}
                    background={color[format]}
                    name={color.name}
                    id={color.id}
                    paletteId={id}
                    showingFullPalette
                />
            );
        });
        return (
            <div className={classes.palette}>
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    changeFormat={this.handleChangeFormat}
                    format={format}
                />
                <div className={classes.paletteColors}>{colorBoxes}</div>
                <PaletteFooter emoji={emoji} paletteName={paletteName} />
            </div>
        );
    }
}

export default withStyles(Styles)(Palette);
