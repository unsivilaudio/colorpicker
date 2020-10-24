import sizes from './sizes';

export default {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '6vh',
        [sizes.down('md')]: {
            flexDirection: 'row',
            flexWrap: 'wrap',
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
            flex: '0 0 100%',
            height: 'auto',
            margin: 0,
            padding: '1rem',
            '& a': {
                width: '100%',
                textAlign: 'center',
            },
        },
    },
    sliderContainer: {
        flex: '1 1 50rem',
        display: 'flex',
        alignItems: 'center',
        [sizes.down('md')]: {
            flex: '0 1 70%',
            fontSize: '1.5rem',
            marginLeft: '0',
            justifyContent: 'center',
            '& span': {
                padding: '0.7rem 0',
                paddingLeft: '1rem',
                flex: '0 0 10rem',
            },
        },
        [sizes.down('xs')]: {
            flex: '0 1 60%',
            fontSize: '1.2rem',
            '& span': {
                paddingLeft: '.8rem',
                flex: '0 0 7rem',
            },
        },
    },
    slider: {
        flex: '0 1 34rem',
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
            margin: '0 0.8rem',
            flex: '1 1 25rem',
        },
        [sizes.down('xs')]: {
            margin: '0 0.5rem',
            flex: '0 1 20rem',
        },
    },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',
        '& .MuiSelect-select:focus': {
            backgroundColor: 'inherit',
        },
        [sizes.down('md')]: {
            flex: '0 1 30%',
            margin: '0',
            paddingRight: '1.5rem',
            display: 'flex',
            justifyContent: 'flex-end',
        },
        [sizes.down('xs')]: {
            flex: '0 1 12rem',
            paddingRight: '1rem',
        },
    },
};
