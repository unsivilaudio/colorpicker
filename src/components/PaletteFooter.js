import React from 'react';
import { withStyles } from '@material-ui/styles';

const Styles = {
    paletteFooter: {
        background: 'white',
        height: '5vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    emoji: {
        fontSize: '1.5rem',
        margin: '0 1rem',
    },
};

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
