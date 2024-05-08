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
    title: "Write your title..",
    description: "write about your KT board",
    image: "/images/kt_1.jpg",
  },
  {
    title: "Write your title..",
    description: "write about your KT board",
    image: "/images/kt_2.jpg",
  },
  {
    title: "Write your title..",
    description: "write about your KT board",
    image: "/images/kt_3.jpg",
  },

  {
    title: "Write your title..",
    description: "write about your KT board",
    image: "/images/kt_4.jpg",
  },
];

const Explore = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
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
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{
          backgroundColor: "aqua",
          "&:hover": { backgroundColor: "white" },
          color: "black",
          marginTop: 10,
        }}
      >
        Home
      </Button>
    </Box>
  );
};

export default Explore;
