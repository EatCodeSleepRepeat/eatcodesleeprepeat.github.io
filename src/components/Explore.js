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
      "Technology and its influence on what we eat. Technology can make artificial food that is harmful to our bodies. We need to be more careful about what we eat. Always know where it comes from.",
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

const videoData = [
  {
    title: "AI Drone",
    description:
      "These drones are low-altitude economy-Drone material distribution. This business mode is already being tested in Shenzhen. To understand this technology better we decided to make it by ourselves. Come and see!",
    video: "/videos/ict.mp4",
  },
  {
    title: "花坛指示牌 (Flowerbed Signage)",
    description:
      "Exploring the practical application of 3D printing in creating informative signage for public and private spaces.",
    video: "/videos/video_2.mp4",
  },
  {
    title: "无人机装配仓ver1 (Drone Assembly Warehouse ver1)",
    description:
      "A look into the first version of a drone assembly warehouse, focusing on its design and initial functionalities.",
    video: "/videos/video_3.mp4",
  },
  {
    title: "无人机装配仓version2 (Drone Assembly Warehouse version2)",
    description:
      "Enhancing our drone assembly warehouse with advanced technologies for improved efficiency and capabilities.",
    video: "/videos/video_4.mp4",
  },
  {
    title: "晷针结构图 (Sundial Structure)",
    description:
      "Reviving ancient technology through 3D printing, showcasing how historical time-telling devices can be recreated and studied today.",
    video: "/videos/video_5.mp4",
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
      <Grid container justifyContent="center" spacing={4} sx={{ mt: 2 }}>
        {videoData.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="video"
                height="auto"
                controls
                src={video.video}
                alt={video.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
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
          display: "block",
          mx: "auto",
          width: "fit-content",
        }}
      >
        Home
      </Button>
    </Box>
  );
};

export default Explore;
