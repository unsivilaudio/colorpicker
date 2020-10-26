import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends React.Component {
    state = {
        stage: 'paletteName',
        newPaletteName: '',
        emoji: '',
    };

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

    handleSelectEmoji = emoji => {
        this.setState({ emoji: emoji.native });
    };

    handleClose = () => {
        this.setState({ stage: null, emoji: null });
        setTimeout(this.props.closeForm, 1000);
    };

    handleGoBack = () => {
        this.setState({ stage: 'paletteName' });
    };

    handleNext = () => {
        this.setState({ stage: 'emoji' });
    };

    handleSubmit = () => {
        const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: this.state.emoji,
        };
        this.props.handleCreatePalette(newPalette);
        this.props.closeForm();
    };

    render() {
        const { newPaletteName } = this.state;

        return (
            <>
                <Dialog
                    open={this.state.stage === 'emoji'}
                    onClose={this.handleClose}>
                    <Picker onSelect={this.handleSelectEmoji} name='emoji' />
                    <DialogActions>
                        <Button onClick={this.handleGoBack} color='primary'>
                            Go Back
                        </Button>
                        <Button
                            onClick={this.handleSubmit}
                            variant='contained'
                            color='primary'>
                            Save Palette
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.stage === 'paletteName'}
                    onClose={this.handleClose}
                    aria-labelledby='form-dialog-title'>
                    <ValidatorForm onSubmit={this.handleNext}>
                        <DialogTitle id='form-dialog-title'>
                            Choose A Palette Name
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your new beautiful
                                palette. Make sure it's unique!
                            </DialogContentText>

                            <TextValidator
                                name='newPaletteName'
                                label='Palette Name'
                                value={newPaletteName}
                                onChange={this.handleChange}
                                fullWidth
                                margin='normal'
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={[
                                    'Enter Palette Name',
                                    'Name already used!',
                                ]}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color='primary'>
                                Cancel
                            </Button>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'>
                                Next
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </>
        );
    }
}

export default PaletteMetaForm;
