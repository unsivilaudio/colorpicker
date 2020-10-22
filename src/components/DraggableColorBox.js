import React from 'react';
import { withStyles } from '@material-ui/styles';

const Styles = {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
    },
};

const draggableColorBox = props => {
    return (
        <div
            className={props.classes.root}
            style={{ backgroundColor: props.color }}>
            {props.name}
        </div>
    );
};

export default withStyles(Styles)(draggableColorBox);
