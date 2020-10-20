import React from 'react';
import { Link } from 'react-router-dom';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/ColorBox.css';

class ColorBox extends React.Component {
    state = { copied: false };

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        });
    };

    render() {
        const { name, background, paletteId, id, showMore } = this.props;
        const { copied } = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className='ColorBox' style={{ background }}>
                    <div
                        className={`copy-overlay ${copied ? 'show' : null}`}
                        style={{ background }}
                    />
                    <div className={`copy-msg ${copied ? 'show' : null}`}>
                        <h1>copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    {showMore && (
                        <Link
                            to={`/palette/${paletteId}/${id}`}
                            onClick={e => e.stopPropagation()}>
                            <span className='see-more'>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;
