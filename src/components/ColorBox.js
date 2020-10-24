import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import Styles from '../styles/ColorBoxStyles';

class ColorBox extends React.Component {
    state = { copied: false };

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        });
    };

    render() {
        const {
            name,
            background,
            paletteId,
            id,
            showingFullPalette,
            classes,
        } = this.props;
        const { copied } = this.state;
        // const isDarkColor = chroma(background).luminance() <= 0.08;
        // const isLightColor = chroma(background).luminance() >= 0.7;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={classes.colorBox} style={{ background }}>
                    <div
                        className={`${classes.copyOverlay} ${
                            copied && classes.showOverlay
                        }`}
                        style={{ background }}
                    />
                    <div
                        className={`${classes.copyMsg} ${
                            copied && classes.showMsg
                        }`}>
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div className={classes.copyContainer}>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette && (
                        <Link
                            to={`/palette/${paletteId}/${id}`}
                            onClick={e => e.stopPropagation()}>
                            <span className={classes.seeMore}>MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(Styles)(ColorBox);
