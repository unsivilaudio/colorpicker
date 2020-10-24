import sizes from './sizes';

export default {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
        [sizes.down('md')]: {
            flexDirection: 'column',
            height: 'auto',
        },
    },
    logo: {
        fontSize: '2.2rem',
        padding: '0 1.3rem',
        marginRight: '1.5rem',
        background: '#eceff1',
        color: 'black',
        fontFamily: 'Roboto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
            '&:visited, &:active': {
                color: 'inherit',
                textDecoration: 'none',
            },
        },
        [sizes.down('md')]: {
            width: '100%',
            margin: 0,
            padding: '1rem',
            '& a': {
                width: '100%',
                textAlign: 'center',
            },
        },
    },
    sliderContainer: {
        [sizes.down('md')]: {
            width: '100%',
            fontSize: '1.5rem',
            marginLeft: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            '& span': {
                padding: '0.7rem 0',
                flex: '1 0 20%',
            },
        },
    },
    slider: {
        width: '34rem',
        margin: '0 1rem',
        display: 'inline-block',
        '& .rc-slider-track': {
            backgroundColor: 'transparent',
        },

        '& .rc-slider-rail': {
            height: '0.8rem',
        },

        '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
            backgroundColor: 'green',
            border: '2px solid green',
            outline: 'none',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-3px',
        },
        [sizes.down('md')]: {
            marginRight: 0,
            maxWidth: '80%',
        },
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',
        '& .MuiSelect-select:focus': {
            backgroundColor: 'inherit',
        },
        [sizes.down('md')]: {
            margin: '0',
            width: '100%',
        },
    },
};
