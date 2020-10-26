import React from 'react';
import { withStyles } from '@material-ui/styles';

import Styles from '../styles/MiniPaletteStyles';

class MiniPalette extends React.PureComponent {
    miniColorBoxes = this.props.colors.map(color => {
        const { classes } = this.props;
        return (
            <div
                className={classes.miniColor}
                style={{ backgroundColor: color.color }}
                key={color.name}
            />
        );
    });

    deletePalette = (e, id) => {
        e.stopPropagation();
        this.props.handleRemovePalette(id);
    };

    render() {
        const { classes, paletteName, emoji, handleClick, id } = this.props;
        return (
            <div className={classes.root} onClick={() => handleClick(id)}>
                <div
                    className={classes.delete}
                    onClick={e => this.deletePalette(e, id)}>
                    <span className={classes.deleteIcon}>X</span>
                </div>
                <div className={classes.colors}>{this.miniColorBoxes}</div>
                <h5 className={classes.title}>
                    {paletteName} <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        );
    }
}

export default withStyles(Styles)(MiniPalette);
