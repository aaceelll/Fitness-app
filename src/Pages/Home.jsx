import React from "react";
import { Box } from "@mui/material";
import HeroBanner from "../Components/HeroBanner/HeroBanner";

const Home = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      overflow: 'hidden',
      position: 'relative',
      pb: { xs: '300px', sm: '400px', md: '0' }, 
    }}>
      <HeroBanner />
    </Box>
  );
};

export default Home;