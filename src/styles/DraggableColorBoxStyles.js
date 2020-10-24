import sizes from './sizes';

export default {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        '&:hover svg': {
            color: 'white',
            transform: 'scale(1.5)',
        },
        [sizes.down('lg')]: {
            width: '25%',
            height: '20%',
        },
        [sizes.down('md')]: {
            width: '50%',
            height: '10%',
            '& svg': {
                color: 'white',
            },
        },
        [sizes.down('sm')]: {
            width: '100%',
            height: '5%',
        },
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: '0',
        bottom: '0',
        padding: '1rem',
        color: 'rgba(0,0,0,0.5)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '1.2rem',
        display: 'flex',
        justifyContent: 'space-between',
        [sizes.down('md')]: {
            fontSize: '1.8rem',
        },
        [sizes.down('sm')]: {
            fontSize: '1.6rem',
            padding: '0.2rem',
        },
    },
    deleteIcon: {
        transition: 'all .3s ease',
    },
};
