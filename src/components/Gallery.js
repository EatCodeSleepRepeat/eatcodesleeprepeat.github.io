import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const initialItems = [
  { id: 1, type: "photo", src: "/images/photo_1.jpg" },
  { id: 2, type: "video", src: "/videos/video_1.mp4" },
  { id: 3, type: "photo", src: "/images/photo_2.jpg" },
  { id: 4, type: "photo", src: "/images/photo_3.jpg" },
  { id: 5, type: "photo", src: "/images/photo_4.jpg" },
  { id: 6, type: "photo", src: "/images/photo_5.jpg" },
  { id: 7, type: "photo", src: "/images/photo_6.jpg" },
  { id: 8, type: "photo", src: "/images/photo_7.jpg" },
  { id: 9, type: "photo", src: "/images/photo_8.jpg" },
  { id: 10, type: "photo", src: "/images/photo_9.jpg" },
  { id: 11, type: "photo", src: "" }, // empty photo block
  { id: 12, type: "photo", src: "" },
  { id: 13, type: "photo", src: "" },
  { id: 14, type: "photo", src: "" },
  { id: 15, type: "photo", src: "" },
];

const ExplorationContent = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredItems = initialItems.filter((item) => {
    return filter === "all" || item.type === filter;
  });

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Explore Our Gallery
      </Typography>
      <Typography variant="body1">
        Here you will find photos and videos of our journey.
      </Typography>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Button onClick={() => handleFilterChange("all")} sx={{ mr: 1 }}>
          All
        </Button>
        <Button onClick={() => handleFilterChange("photo")} sx={{ mr: 1 }}>
          Photos
        </Button>
        <Button onClick={() => handleFilterChange("video")}>Videos</Button>
      </Box>
      <Grid container spacing={2}>
        {filteredItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box
              sx={{
                width: "100%",
                height: 200,
                backgroundColor: item.src ? "transparent" : "#ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
              }}
            >
              {item.src ? (
                item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`Gallery item ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )
              ) : (
                "No image"
              )}
            </Box>
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

export default ExplorationContent;
