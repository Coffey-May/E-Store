import React from 'react'
import { Container, Grid,Box,Link } from '@material-ui/core'
import useStyles from './styles';


const Footer = () => {
    const classes = useStyles();
    return (
  
<footer className={classes.foot}>
   <Box bgcolor="text.secondary" color="white">
       <Container maxWidth="lg">
           <Grid container spacing={5}>
               <Grid item xs={12} sm={4}>
                   <Box borderBottom={0}>HELP</Box>
                   <Box>
                       <h1>skdjbnfk</h1>
                       <Link href="/" color="inherit">HOME</Link>
                   </Box>
               </Grid>
           </Grid>
       </Container>
   </Box>
   </footer>

    )
}

export default Footer
