import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import MiniPalette from './MiniPalette';
import Styles from '../styles/PaletteListStyle';

class PaletteList extends React.Component {
    state = { openDeleteDialog: false, deletePaletteSelect: null };

    openDialog = id => {
        this.setState({ openDeleteDialog: true, deletePaletteSelect: id });
    };

    closeDialog = () => {
        this.setState({ openDeleteDialog: false, deletePaletteSelect: null });
    };

    removePalette = () => {
        this.props.removePalette(this.state.deletePaletteSelect);
        this.closeDialog();
    };

    goToPalette = id => {
        this.props.history.push(`/palette/${id}`);
    };

    render() {
        const { classes, palettes } = this.props;
        const { openDeleteDialog } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to='/palette/new'>Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(el => {
                            return (
                                <CSSTransition
                                    key={el.id}
                                    id={el.id}
                                    classNames='fade'
                                    timeout={500}>
                                    <MiniPalette
                                        handleRemovePalette={this.openDialog}
                                        handleClick={this.goToPalette}
                                        {...el}
                                    />
                                </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
                </div>
                <Dialog open={openDeleteDialog} onClose={this.closeDialog}>
                    <DialogTitle>Delete This Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.removePalette}>
                            <Avatar
                                style={{
                                    backgroundColor: blue[100],
                                    color: blue[600],
                                }}>
                                <CheckIcon />
                            </Avatar>
                            <ListItemText style={{ marginLeft: '1rem' }}>
                                Delete
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.closeDialog}>
                            <Avatar
                                style={{
                                    backgroundColor: red[100],
                                    color: red[600],
                                }}>
                                <ClearIcon />
                            </Avatar>
                            <ListItemText style={{ marginLeft: '1rem' }}>
                                Cancel
                            </ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(Styles)(PaletteList);
