import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({

    appBar: {
        width: '100vw',
        left: 0,
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        // [theme.breakpoints.up('sm')]: {
        //     width: `calc(100% - ${drawerWidth}px)`,
        //     marginLeft: drawerWidth,
        // },

        // backgroundColor: '#f5feff',
        // background: '#706e6e'
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        fontSize: '5vmin',
        textDecoration: 'none',
        color: '#ff4faa !important',
        fontFamily: 'Palette Mosaic, cursive !important',

    },

    image: {
        marginRight: '10px',
        aspectRatio: 'attr(width) / attr(height)',
        width: '5vw',
        height: 'auto'
    }
    , contact: {
        textDecoration: 'none',
        color: '#ff4faa !important',
    },
    containerStyle: {
        display: "flex",
        flexDirection: 'column',
        color: 'white'
    },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    //     [theme.breakpoints.up('sm')]: {
    //         display: 'none',
    //     },
    // },
    grow: {
        flexGrow: 1,

    },
    // search: {
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: fade(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //         backgroundColor: fade(theme.palette.common.white, 0.25),
    //     },
    //     marginRight: theme.spacing(2),
    //     marginLeft: 0,
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //         width: 'auto',
    //     },
    // },
    // searchIcon: {
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // inputRoot: {
    //     color: 'inherit',
    // },
    // inputInput: {
    //     padding: theme.spacing(1, 1, 1, 0),
    //     // vertical padding + font size from searchIcon
    //     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    //     transition: theme.transitions.create('width'),
    //     width: '100%',
    //     [theme.breakpoints.up('md')]: {
    //         width: '20ch',
    //     },
    // },
}));