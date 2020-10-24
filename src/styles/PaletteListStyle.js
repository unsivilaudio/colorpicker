import sizes from './sizes';

export default {
    root: {
        backgroundColor: 'blue',
        minHeight: '100vh',
        padding: '2rem 0',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        [sizes.down('lg')]: {
            alignItems: 'center',
            padding: '1.5rem 0',
        },
        [sizes.down('sm')]: {
            padding: '1rem 0',
        },
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [sizes.down('lg')]: {
            flexDirection: 'row',
            width: '80%',
            height: '100%',
        },
        [sizes.down('sm')]: {
            width: '90%',
        },
    },
    nav: {
        display: 'flex',
        width: '100%',
        margin: '1rem 0',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        '& a': {
            color: 'white',
        },
    },
    palettes: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
};
