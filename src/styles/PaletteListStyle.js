import sizes from './sizes';
import svgBG from './Confetti-Doodles.svg';

export default {
    '@global': {
        '.fade-exit': {
            opacity: 1,
        },
        '.fade-exit-active': {
            opacity: 0,
            transition: 'opacity 500ms ease-out',
        },
    },
    root: {
        backgroundColor: '#1e8feb',
        backgroundImage: `url(${svgBG})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '2rem 0',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        [sizes.down('lg')]: {
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
