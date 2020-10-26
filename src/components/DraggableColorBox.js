import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import { Delete } from '@material-ui/icons';

import Styles from '../styles/DraggableColorBoxStyles';

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
