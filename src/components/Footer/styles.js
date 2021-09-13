import { makeStyles } from '@material-ui/core/styles';



export default makeStyles((theme) => ({

    foot: {

        position: 'relative',
        bottom: '0',
        width: '100vw',
        background: '#706e6e',
        marginTop: '0 auto',
        left: '0',
        right: '0',


    },
    boxWrap: {
        display: 'flex',
        flexDirection: 'row',
        padding: '1em'
    },
    logo: {
        fontFamily: 'Palette Mosaic, cursive !important'
    }
}));