import React from 'react';
import { IconButton, MenuItem, Select, Snackbar } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import '../../styles/NavBar.css';
class Navbar extends React.Component {
    state = { sbOpen: false };

    closeSnackbar = () => {
        this.setState({ sbOpen: false });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.format !== this.props.format) {
            this.setState({ sbOpen: true });
        }
    }

    render() {
        const { level, changeLevel, changeFormat, format } = this.props;

        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href='/'>reactcolorpicker</a>
                </div>
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className='select-container'>
                    <Select onChange={changeFormat} value={format}>
                        <MenuItem value='hex'>HEX - #fffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>
                            RGBA - rgba(255,255,255, 1.0)
                        </MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={this.state.sbOpen}
                    autoHideDuration={3000}
                    onClose={this.closeSnackbar}
                    message={
                        <span id='message-id'>
                            Format changed to {format.toUpperCase()}!
                        </span>
                    }
                    ContentProps={{ 'aria-describedby': 'message-id' }}
                    action={[
                        <IconButton
                            onClick={this.closeSnackbar}
                            color='inherit'
                            key='close'
                            aria-label='close'>
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </header>
        );
    }
}

export default Navbar;
