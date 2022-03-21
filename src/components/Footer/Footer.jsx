import React, { memo } from "react";
import {
  Container,
  Grid,
  Box,
  Link,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CopyrightIcon from "@material-ui/icons/Copyright";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <footer id="footer" className={classes.foot}>
        <Box color="white">
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" className={classes.logo}>
                  BONES MALONES
                </Typography>
                <Box>
                  <Link href="/" color="inherit">
                    NASHVILLE, TN.
                  </Link>
                </Box>
                <Box>
                  <CopyrightIcon />
                  {new Date().getFullYear()}
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant={"h6"}>ABOUT US</Typography>
                <Box>
                  <Link href="/" color="inherit">
                    HISTORY
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    TESTIMONIALS
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    PRODUCT DETAILS
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    FAQ
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant={"h6"}>STAY CONNECTED</Typography>
                <Container className={classes.boxWrap}>
                  <Box p={1}>
                    <Link aria-label="FaceBook" href="/" color="inherit">
                      <FacebookIcon />
                    </Link>
                  </Box>
                  <Box p={1}>
                    <Link aria-label="Email" href="/" color="inherit">
                      <EmailIcon />
                    </Link>
                  </Box>
                  <Box p={1}>
                    <Link aria-label="LinkedIn" href="/" color="inherit">
                      <LinkedInIcon />
                    </Link>
                  </Box>
                  <Box p={1}>
                    <Link aria-label="Telephone" href="/" color="inherit">
                      <PhoneIphoneIcon />
                    </Link>
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default memo(Footer);
