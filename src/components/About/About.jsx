import React from 'react'
import loadable from '@loadable/component';
const Typography = loadable(() => import("@material-ui/core/Typography"));

const About = () => {
    return (
        <div>
            <Typography variant={"h4"}>HISTORY</Typography>
            <hr />
            <Typography variant={"h4"}>TESTIMONIALS</Typography>
            <hr />
            <Typography variant={"h4"}>PRODUCT DETAILS</Typography>
            <hr />
            <Typography variant={"h4"}>FAQ</Typography>
            <hr />
        </div>
    )
}

export default About
