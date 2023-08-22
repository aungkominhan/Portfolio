import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide/Slide";
import Box from "@mui/material/Box";

const About = () => {
  return (
    <div>
      <Slide
        direction="down"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <Box>
          <h1 style={{ textAlign: "center" }}>
            <span>
              Hey!<span></span>
            </span>{" "}
            👋
          </h1>
        </Box>
      </Slide>

      <Stack direction="row" spacing={2} sx={{ ml: 20, mt: 5, mr: 10 }}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 150, height: 150 }}
        />{" "}
        <Typography variant="h4" gutterBottom>
          My name is <b>AUNG KO MIN HAN</b>. I'm 26 years old. I'm a full stack
          Developer. My developer junory was started from 2022
        </Typography>
      </Stack>
    </div>
  );
};
export default About;
