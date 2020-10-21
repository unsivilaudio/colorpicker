import React from 'react';
import { withStyles } from '@material-ui/styles';
import Styles from '../styles/MiniPaletteStyles';

const MiniPalette = props => {
    const { classes, colors, paletteName, emoji } = props;
    const miniColorBoxes = colors.map(color => {
        return (
            <div
                className={classes.miniColor}
                style={{ backgroundColor: color.color }}
                key={color.name}
            />
        );
    });

    return (
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
};

export default withStyles(Styles)(MiniPalette);
