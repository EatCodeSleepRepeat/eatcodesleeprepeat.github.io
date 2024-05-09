import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const teamMembers = [
  {
    name: "Elon",
    role: "balanced",
    bio: "My goal is to grow in every way because I like learning new things.",
    image: "images/profile_elon.jpg",
  },
  {
    name: "Michael",
    role: "thinkers",
    bio: "My goal is to be a thinker because I enjoy solving puzzles and problems.",
    image: "images/profile_michael.jpg",
  },
  {
    name: "Owen",
    role: "principied",
    bio: "My goal is to be good person with rules because it good to do right things.",
    image: "images/profile_owen.jpg",
  },
  {
    name: "Jack",
    role: "inquirer",
    bio: "My goal is to be an inquirer because I love asking questions to learn.",
    image: "images/profile_jack.jpg",
  },
  {
    name: "Andy",
    role: "knowledgeble",
    bio: "I want know lot things because I think knowing stuff make you smart.",
    image: "images/profile_andy.jpg",
  },
  {
    name: "Frank",
    role: "principled",
    bio: "I want be principled because my mom says being honest is best.",
    image: "images/profile_frank.jpg",
  },
];

const AboutUs = () => {
  const { width, height } = useWindowSize();
  const [runConfetti, setRunConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRunConfetti(true);
      setTimeout(() => setRunConfetti(false), 5000); // run confetti for 5 seconds
    }, 500); // starts 1 second after page load

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        textAlign: "center",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url('/images/wall.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {runConfetti && (
        <Confetti
          width={width}
          height={Math.max(height, document.body.scrollHeight)}
        />
      )}
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Meet the Team Behind Our Learning Journey
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, mx: "auto" }}>
              <CardMedia
                component="img"
                image={member.image}
                alt={member.name}
                style={{ borderRadius: "50%" }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "royalblue" }}>
                  {member.role}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "aqua",
          "&:hover": { backgroundColor: "white" },
          color: "black",
        }}
        component={Link}
        to="/"
      >
        Home
      </Button>
    </Box>
  );
};

export default AboutUs;
