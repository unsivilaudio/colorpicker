import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button } from '@material-ui/core';
import arrayMove from 'array-move';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import Styles from '../styles/NewPaletteFormStyles.js';
import { drawerWidth } from '../styles/constants';

class NewPaletteForm extends React.Component {
    static defaultProps = {
        maxColors: 20,
    };

    state = {
        open: true,
        currentColor: '#00808',
        newColorName: '',
        newPaletteName: '',
        colors: this.props.palettes[0].colors,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    addNewColor = newColor => {
        const colors = [...this.state.colors].concat(newColor);
        this.setState({ colors, newColorName: '' });
    };

    removeColor = name => {
        const colors = this.state.colors.filter(el => el.name !== name);
        this.setState({ colors });
    };

    clearColors = () => {
        this.setState({ colors: [] });
    };

    getRandomColor = () => {
        const allColors = this.props.palettes.map(p => p.colors).flat();
        const rand = Math.floor(Math.random() * allColors.length);
        let newColor = allColors[rand];
        if (this.state.colors.find(el => el.name === newColor.name)) {
            newColor = this.getRandomColor();
        }
        return newColor;
    };

    addRandomColor = () => {
        const newColor = this.getRandomColor();
        const colors = this.state.colors.concat(newColor);
        this.setState({ colors });
    };

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = newPalette => {
        newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
        newPalette.colors = this.state.colors;
        this.props.savePalette(newPalette);
        this.props.history.push('/');
    };

    render() {
        const { classes, maxColors, palettes } = this.props;
        const { open, colors } = this.state;
        const paletteIsFull = colors.length === maxColors;

        return (
            <div className={classes.root}>
                <PaletteFormNav
                    open={open}
                    classes={classes}
                    palettes={palettes}
                    handleCreatePalette={this.handleSubmit}
                    handleOpenDrawer={this.handleDrawerOpen}
                    drawerWidth={drawerWidth}
                />
                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='left'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon fontSize='large' />
                        </IconButton>
                    </div>
                    <Divider />
                    <div className={classes.container}>
                        <Typography variant='h3' gutterBottom>
                            Design Your Palette
                        </Typography>
                        <div className={classes.buttons}>
                            <Button
                                variant='contained'
                                color='secondary'
                                className={classes.button}
                                onClick={this.clearColors}>
                                Clear Palette
                            </Button>
                            <Button
                                variant='contained'
                                color='primary'
                                className={classes.button}
                                disabled={paletteIsFull}
                                onClick={this.addRandomColor}>
                                Random Color
                            </Button>
                        </div>
                        <ColorPickerForm
                            paletteIsFull={paletteIsFull}
                            addColor={this.addNewColor}
                            colors={this.state.colors}
                        />
                    </div>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}>
                    <div className={classes.drawerHeader} />{' '}
                    <DraggableColorList
                        colors={colors}
                        removeColor={this.removeColor}
                        axis='xy'
                        onSortEnd={this.onSortEnd}
                    />
                </main>
            </div>
        );
    }
}

export default withStyles(Styles, { withTheme: true })(NewPaletteForm);
