import { drawerWidth } from './constants';

export default theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '5rem',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    navBtns: {
        marginRight: '1rem',
        fontSize: '1.4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hide: {
        display: 'none',
    },
    button: {
        margin: '0 0.5rem',
        padding: '.3rem 1rem',
    },
    drawer: {},
    drawerPaper: {},
    drawerHeader: {},
    content: {},
    contentShift: {},
    container: {},
    buttons: {},
});
