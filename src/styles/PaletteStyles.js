import sizes from './sizes';

export default {
    palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    paletteColors: {
        height: '90%',
    },
    goBack: {
        display: 'inline-block',
        position: 'relative',
        height: '50%',
        width: '20%',
        backgroundColor: 'black',
        marginBottom: '-3.5px',
        '& a': {
            textDecoration: 'none',
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: '33.3333%',
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '20%',
        },
        [sizes.down('xs')]: {
            width: '100%',
            height: '10%',
        },
    },
    backButton: {
        cursor: 'pointer',
        width: '10rem',
        height: '3rem',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        textDecoration: 'none',
        outline: 'none',
        color: 'white',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1.6rem',
        lineHeight: '3rem',
        textTransform: 'uppercase',
        border: 'none',
        transition: 'all 0.5s ease',
    },
};
