import React from 'react';
import { withStyles } from '@material-ui/styles';
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Styles from '../styles/ColorPickerFormStyles';

class ColorPickerForm extends React.Component {
    state = { currentColor: 'teal', newColorName: '' };

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', value =>
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
    }

    handleChangeColor = color => {
        this.setState({ currentColor: color['hex'] });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmitColor = () => {
        const { currentColor, newColorName } = this.state;
        this.props.addColor({ name: newColorName, color: currentColor });
        this.setState({ newColorName: '' });
    };

    render() {
        const { paletteIsFull, classes } = this.props;
        return (
            <div className={classes.container}>
                <ChromePicker
                    color={this.state.currentColor}
                    onChangeComplete={this.handleChangeColor}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmitColor}>
                    <TextValidator
                        name='newColorName'
                        value={this.state.newColorName}
                        placeholder='new color name'
                        variant='filled'
                        margin='normal'
                        onChange={this.handleChange}
                        className={classes.colorNameInput}
                        validators={[
                            'required',
                            'isColorNameUnique',
                            'isColorUnique',
                        ]}
                        errorMessages={[
                            'Enter a color name',
                            'Color name must be unique',
                            'Color already used',
                        ]}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        disabled={paletteIsFull}
                        className={classes.addColor}
                        style={
                            !paletteIsFull
                                ? {
                                      backgroundColor: this.state.currentColor,
                                  }
                                : null
                        }
                        type='submit'>
                        {paletteIsFull ? 'PALETTE FULL' : 'Add Color'}
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(Styles)(ColorPickerForm);
