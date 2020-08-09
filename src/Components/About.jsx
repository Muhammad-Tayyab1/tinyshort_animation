import React from "react";

import { makeStyles, Box, Typography, IconButton } from "@material-ui/core";

import ProfileImage from "../Images/image.jpg";

import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";
import GitHubIcon from '@material-ui/icons/GitHub';
import {Facebook, Instagram, Twitter,WhatsApp} from '@material-ui/icons'
import Badge from '@material-ui/core/Badge';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: " linear-gradient(to right top, #e544a0, #d052b4, #b75fc3, #9a6acd, #7b73d1, #5e7fd8, #3b89d9, #0091d7, #009fd5, #00acce, #06b7c4, #4ac0b9)",
    minHeight: "500px",
    padding: "20xp",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarColumn: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    "& img": {
      width: "100%",
      margin: "auto",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      maxWidth: "350px",
      borderRadius: "50%",
      border: "10px double #ffffff",
      overflow: "hidden",
    },
    "& p": {
      fontSize: "20px",
      marginTop: "20px",
      marginBotton: "20px",
      fontWeight: "200",
      fontStyle: "italic",
    },
  },
}));

const About = () => {
  const classes = useStyles();

  const { keyframes, timing } = fadeIn;
  const about = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 200,
      duration: 6000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });

  return (
    <Box component="div" className={classes.root}>
      <Box component="div" classname={classes.avatarColumn}>
        <Box component="div" className={classes.avatar}>
          <img
            src={ProfileImage}
            alt="profile"
            ref={about.ref}
            style={{ height: "250px", width: "250px" }}
          />
          <Typography component="p">
            <strong>Muhammad Tayyab</strong>, @Copywrites2020 
          </Typography>
         
          <Typography >
           
          <IconButton >
          <Badge  color="secondary">
           <a href="https://github.com/Muhammad-Tayyab1/tinyshort_animation"><GitHubIcon/></a>
          </Badge>
        </IconButton>
        <IconButton >
          <Badge  color="secondary">
          <a href="https://web.facebook.com/profile.php?id=100031034920869"><Facebook/></a> 
          </Badge>
        </IconButton>
        <IconButton >
          <Badge  color="secondary">
          <a href="https://wa.me/qr/KZSAWNBXEXVME1"><WhatsApp/></a> 
          </Badge>
        </IconButton>
        <IconButton >
          <Badge  color="secondary">
          <a href="https://twitter.com/Muhamma45165722"><Twitter/></a> 
          </Badge>
        </IconButton>
        <IconButton >
          <Badge  color="secondary">
           <a href="https://www.instagram.com/muhammadtayyab575/?hl=en"><Instagram/></a>
          </Badge>
        </IconButton>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
