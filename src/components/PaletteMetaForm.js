import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteMetaForm extends React.Component {
    state = {
        open: true,
        newPaletteName: '',
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

    handleClose = () => {
        this.setState({ open: false });
        setTimeout(this.props.closeForm, 1000);
    };

    render() {
        const { newPaletteName } = this.state;
        const { handleCreatePalette } = this.props;

        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby='form-dialog-title'>
                <ValidatorForm
                    onSubmit={() => handleCreatePalette(newPaletteName)}>
                    <DialogTitle id='form-dialog-title'>
                        Choose A Palette Name
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for your new beautiful palette.
                            Make sure it's unique!
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
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        );
    }
}

export default PaletteMetaForm;
