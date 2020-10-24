import sizes from './sizes';

export default {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        overflowY: 'auto',
        padding: '2rem 0',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        [sizes.down('lg')]: {
            alignItems: 'center',
            minHeight: '100vh',
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
            paddingBottom: '2rem',
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
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%',
    },
};
