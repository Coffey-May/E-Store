import React from "react";
import loadable from "@loadable/component";
const Typography = loadable(() => import("@material-ui/core/Typography"));

const About = () => {
  return (
    <div>
      <Typography variant={"p"}> ABOUT US</Typography>
      <hr />
      <Typography variant={"p"}>HISTORY</Typography>
      <hr />
      <Typography variant={"p"}>TESTIMONIALS</Typography>
      <hr />
      <Typography variant={"p"}>PRODUCT DETAILS</Typography>
      <hr />
      <Typography variant={"p"}>FAQ</Typography>
      <hr />
    </div>
  );
};

export default About;
