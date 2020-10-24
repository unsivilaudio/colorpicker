import sizes from './sizes';

export default {
    root: {
        flex: '0 0 30%',
        margin: '2.5% 0',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        cursor: 'pointer',
        '&:hover $delete': {
            opacity: 1,
        },
        [sizes.down('sm')]: {
            overflow: 'hidden',
            flexBasis: '48%',
            margin: '2% 0',
        },
        [sizes.down('xs')]: {
            flexBasis: '100%',
            margin: '1rem 0',
        },
    },
    colors: {
        backgroundColor: '#dae1e4',
        height: '15rem',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden',
        [sizes.down('xs')]: {
            height: '25rem',
        },
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '1rem',
        fontSize: '1rem',
        position: 'relative',
        [sizes.down('xs')]: {
            fontSize: '1.6rem',
        },
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem',
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3.5px',
    },
    delete: {
        position: 'absolute',
        top: 0,
        right: 0,
        opacity: 0,
        zIndex: 10,
        transition: 'all .3s ease-in-out',
        [sizes.down('sm')]: {
            opacity: 1,
        },
    },
    deleteIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'white',
        backgroundColor: '#eb3d30',
        fontSize: '1.5rem',
        padding: '.8rem',
    },
};
