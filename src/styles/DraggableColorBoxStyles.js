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
    },
    deleteIcon: {
        transition: 'all .3s ease',
    },
};
