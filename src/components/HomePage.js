import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "/images/front_1.jpg",
    "/images/front_2.jpg",
    "/images/front_3.jpg",
    "/images/front_4.jpg",
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        backgroundImage: `url('/images/school_1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <audio autoPlay loop>
        <source src="/music/song_1.mp4" type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
      <Typography variant="h3" gutterBottom align="center">
        Welcome to Our Learning Journey!
      </Typography>

      <Box
        sx={{
          mt: 2,
          mb: 4,
          p: 3,
          border: "2px solid #333",
          borderRadius: "8px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
          mx: "auto",
          maxWidth: "80%",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "slateblue" }}>
          Unit of Inquiry: How the World Works
        </Typography>
        <Typography variant="h6">
          Central Idea: The development of technology is closely related to
          people's lives
        </Typography>
        <Typography variant="h4" sx={{ mt: 5, color: "slateblue" }}>
          Lines Of Inquiry:
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            p: 0,
            mt: 5,
            mb: 15,
          }}
        >
          {[
            "The role of technology",
            "Technology and Life",
            "Science and Technology Security",
          ].map((text, index) => (
            <ListItem key={index} sx={{ width: "100%", textAlign: "center" }}>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" sx={{ mt: 2 }}>
          A description of our journey:
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <Typography variant="body2" sx={{ mt: 1 }}>
            We are doing a PYPX project. We learned how to study right, and that
            team spirit is very important. We learned a lot about science and
            technology that made us more open-minded.
          </Typography>
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Technology is used for food, education, making things
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Gallery
              </Typography>
              <Typography variant="body2">
                Some photo's and video's of our exploration
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                color="primary"
                component={Link}
                to="/explore"
              >
                Start Exploring
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Explore
              </Typography>
              <Typography variant="body2">
                Some interesting things we discovered...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                color="secondary"
                component={Link}
                to="/exploration"
              >
                Explore together
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                About Us
              </Typography>
              <Typography variant="body2">Get to know the group</Typography>
            </CardContent>
            <CardActions>
              <Button size="large" color="primary" component={Link} to="/about">
                Get to know us!
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 4, marginLeft: 2, marginRight: 2 }}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} style={{ padding: theme.spacing(2) }}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default HomePage;
