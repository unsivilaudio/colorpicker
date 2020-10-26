import React from 'react';
import { withStyles } from '@material-ui/styles';

import Styles from '../styles/PaletteFooterStyles';

const paletteFooter = props => {
    const { classes } = props;
    return (
        <footer className={classes.paletteFooter}>
            {props.paletteName}
            <span className={classes.emoji}>{props.emoji}</span>
        </footer>
    );
};

export default withStyles(Styles)(paletteFooter);
