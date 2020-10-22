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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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
        height: '6.4rem',
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
        fontSize: '1.4rem',
    },
});

class PaletteFormNav extends React.Component {
    state = { newPaletteName: '' };

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
            this.props.palettes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const {
            classes,
            open,
            handleCreatePalette,
            handleOpenDrawer,
        } = this.props;
        const { newPaletteName } = this.state;

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
                        <ValidatorForm
                            onSubmit={() =>
                                handleCreatePalette(newPaletteName)
                            }>
                            <TextValidator
                                name='newPaletteName'
                                label='Palette Name'
                                value={this.state.newPaletteName}
                                onChange={this.handleChange}
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={[
                                    'Enter Palette Name',
                                    'Name already used!',
                                ]}
                            />
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'>
                                Save Palette
                            </Button>
                        </ValidatorForm>
                        <Link to='/'>
                            <Button variant='contained' color='secondary'>
                                Go Back
                            </Button>
                        </Link>
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(Styles, { withTheme: true })(PaletteFormNav);
