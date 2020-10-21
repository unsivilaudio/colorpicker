import chroma from 'chroma-js';

export default {
    colorBox: {
        fontSize: '1.2rem',
        width: '20%',
        height: props => (props.showingFullPalette ? '25%' : '50%'),
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        '&:hover button': {
            opacity: 1,
        },
    },
    copyText: {
        color: props =>
            chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
    },
    colorName: {
        color: props =>
            chroma(props.background).luminance() <= 0.08 ? 'white' : 'black',
    },
    seeMore: {
        color: props =>
            chroma(props.background).luminance() >= 0.5
                ? 'rgba(0,0,0,0.6)'
                : 'white',
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0',
        bottom: '0',
        width: '6rem',
        height: '3rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        lineHeight: '3rem',
    },
    copyButton: {
        color: props =>
            chroma(props.background).luminance() >= 0.5
                ? 'rgba(0,0,0,0.6)'
                : 'white',
        width: '10rem',
        height: '3rem',
        position: 'absolute',
        opacity: '0',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1.6rem',
        lineHeight: '3rem',
        textTransform: 'uppercase',
        border: 'none',
        transition: 'all 0.5s ease',
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0',
        bottom: '0',
        padding: '1rem',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.5s ease-in-out',
        transform: 'scale(0.1)',
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
    },
    copyMsg: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',
        '& h1': {
            textTransform: 'uppercase',
            width: '100%',
            textAlign: 'center',
            fontWeight: '400',
            textShadow: '1px 2px black',
            background: 'rgba(255, 255, 255, 0.2)',
            marginBottom: '0',
            padding: '1rem',
        },
        '& p': {
            fontSize: '2rem',
            fontWeight: '100',
        },
    },
    showMsg: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
        transition: 'all 0.4s ease-in-out 0.2s',
    },
};
