import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import ColorBox from './ColorBox';
import Navbar from './nav/NavBar';
import PaletteFooter from './PaletteFooter';

import Styles from '../styles/PaletteStyles';

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
                    key={box.name}
                    name={box.name}
                    background={box[this.state.format]}
                    showingFullPalette={false}
                />
            );
        });
    };

    render() {
        const { paletteName, paletteId, emoji, classes } = this.props;

        return (
            <div className={classes.palette}>
                <Navbar
                    changeFormat={this.handleChangeFormat}
                    format={this.state.format}
                />
                <div className={classes.paletteColors}>
                    {this.renderColorBox()}
                    <div className={classes.goBack}>
                        <Link
                            to={`/palette/${paletteId}`}
                            className={classes.backButton}>
                            Go Back
                        </Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(Styles)(SingleColorPalette);
