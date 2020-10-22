import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Delete } from '@material-ui/icons';
import { SortableElement } from 'react-sortable-hoc';

const Styles = {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        '&:hover svg': {
            color: 'white',
            transform: 'scale(1.5)',
        },
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0',
        bottom: '0',
        padding: '1rem',
        color: 'rgba(0,0,0,0.5)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '1.2rem',
        display: 'flex',
        justifyContent: 'space-between',
    },
    deleteIcon: {
        transition: 'all .3s ease',
    },
};

const draggableColorBox = props => {
    const { classes, name, color, handleClick } = props;
    return (
        <div className={classes.root} style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <span>
                    <Delete
                        className={classes.deleteIcon}
                        onClick={handleClick}
                    />
                </span>
            </div>
        </div>
    );
};

const app = withStyles(Styles)(draggableColorBox);

export default SortableElement(app);
