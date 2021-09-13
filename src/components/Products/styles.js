
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
        width: '100vw'
    },

    image: {
        transform: 'scaleX(-1)',
        [theme.breakpoints.down('md')]: {
            marginTop: '7vh',
        },
        width: '100vw',
        backgroundSize: "cover",
        height: "auto",
        zIndex: "-1",
        position: "fixed"
    },
    headLine: {
        fontSize: '7.5vw',

        textDecoration: 'none',
        fontFamily: 'Palette Mosaic, cursive !important'
    },

    title: {
        marginTop: '60vh',
        color: '#ff4faa !important',
        paddingBottom: '1.5em',
        fontSize: '4vw',
        [theme.breakpoints.down('sm')]: {
            marginTop: '10vh',

        },

    },
    title2: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        fontSize: '4vw',
        fontFamily: 'Rock Salt, cursive  !important',

    },
    title3: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        fontSize: '3vw',

    },

}));