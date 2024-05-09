import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ktBoards = [
  {
    title: "Technology and Food",
    description:
      "Technology and its influence on what we eat. Technology can make artificial food that is harmful to our bodies. We need to be more careful about what we eat. Always know where it comes from. ",
    image: "/images/kt_1.jpg",
  },
  {
    title: "Everyday Technology",
    description:
      "Technology is used for food, transportation, education, making things. We use it everywhere. Its good to understand that no technology means we will be very poor and we will struggle to make money.",
    image: "/images/kt_2.jpg",
  },
  {
    title: "The Role of Science Technology",
    description:
      "Science and technology helps us to do things quicker. We can have more time to do other things. We realized that technology is part of us everyday lives.",
    image: "/images/kt_3.jpg",
  },
  {
    title: "Our Unit Information",
    description:
      "This is our reason for our inquiry. We need to know our beginning to start",
    image: "/images/kt_4.jpg",
  },
];

const Explore = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url('/images/school_10.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h3" gutterBottom align="center">
        Explore Our Inquiry Boards
      </Typography>
      <Grid container spacing={4}>
        {ktBoards.map((board, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="194"
                image={board.image}
                alt={board.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {board.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {board.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ mt: 4, color: "#000000" }}
      >
        Don't forget ICT...
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="video"
              height="auto"
              controls
              src="/videos/ict.mp4"
              alt="AI Drone"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                AI Drone
              </Typography>
              <Typography variant="body2" color="text.secondary">
                These drones are low-altitude economy-Drone material
                distribution. This business mode is already being tested in
                Shenzhen. To understand this technology better we decided to
                make it by ourself. Come and see see
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{
          backgroundColor: "aqua",
          "&:hover": { backgroundColor: "white" },
          color: "black",
          marginTop: 10,
          display: "block", // Ensures button is block-level for centering
          mx: "auto", // Centers the button
          width: "fit-content", // Ensures the button width fits its content
        }}
      >
        Home
      </Button>
    </Box>
  );
};

export default Explore;
