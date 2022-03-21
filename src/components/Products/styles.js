
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
        marginTop: '30vh',
        color: '#ff4faa !important',
        paddingBottom: '1.5em',
        fontSize: '4vw',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20vh',
            textAlign: 'center'
        },

    },
    title2: {
        flexGrow: 1,
        // alignItems: 'center',
        // display: 'flex',
        textDecoration: 'none',
        fontSize: '4vw',
        // fontFamily: 'Rock Salt, cursive  !important',
        padding: '1em',
    },
    title3: {
        flexGrow: 1,
        // alignItems: 'center',
        // display: 'flex',
        textDecoration: 'none',
        fontSize: '3vw',
        padding: '1em',

    },
    knockOut: {
        textAlign: 'center',
        fontWeight: 'bold',
        display: 'block',
        color: 'white',
        fontSize: '7vmin',
        textShadow: ' -1px -.75px 0 #000, 1px -.75px 0 #000, -.75px 1px 0 #000, .75px .75px 0 #000',

    },

}));