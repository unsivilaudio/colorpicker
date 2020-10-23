import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 400;

const Styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '5rem',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    navBtns: {
        marginRight: '1rem',
        fontSize: '1.4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hide: {
        display: 'none',
    },
    button: {
        margin: '0 0.5rem',
        padding: '.3rem 1rem',
    },
});

class PaletteFormNav extends React.Component {
    state = { formShowing: false };

    showForm = () => {
        this.setState({ formShowing: true });
    };

    closeForm = () => {
        this.setState({ formShowing: false });
    };

    render() {
        const {
            classes,
            open,
            handleCreatePalette,
            handleOpenDrawer,
            palettes,
        } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color='inherit'
                            aria-label='Open drawer'
                            fontSize='large'
                            onClick={handleOpenDrawer}
                            className={classNames(
                                classes.menuButton,
                                open && classes.hide
                            )}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' color='inherit' noWrap>
                            Create A New Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Link to='/'>
                            <Button
                                variant='contained'
                                color='secondary'
                                className={classes.button}>
                                Go Back
                            </Button>
                        </Link>
                        <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={this.showForm}>
                            Save
                        </Button>
                        {this.state.formShowing && (
                            <PaletteMetaForm
                                handleCreatePalette={handleCreatePalette}
                                palettes={palettes}
                                closeForm={this.closeForm}
                            />
                        )}
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(Styles, { withTheme: true })(PaletteFormNav);
