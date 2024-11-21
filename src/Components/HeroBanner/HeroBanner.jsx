import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HeroBannerImage from 'assets/images/banner.png';

const HeroBanner = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        mt: { xs: '80px', sm: '80px', lg: '80px' },
        mx: { xs: '20px', sm: '50px' },
        position: 'relative',
        overflow: 'visible',
        textAlign: 'center', // Buat konten di tengah
      }}
    >
      {/* Text Section */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          color="#FF2625"
          fontWeight="600"
          sx={{
            fontSize: { xs: '32px', sm: '40px' },
            mb: '10px',
          }}
        >
          Welcome To R-Fitness
        </Typography>

        <Typography
          fontWeight={700}
          sx={{
            fontSize: { xs: '32px', sm: '40px', lg: '34px' },
            mb: '13px',
          }}
        >
          Transform Your Body With R-Fitness!
        </Typography>

      {/* Image Section */}
      <Box
              sx={{
                mt: 2,
                mb: '15px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={HeroBannerImage}
                alt="hero-banner"
                style={{
                  maxWidth: isMobile ? '90%' : '70%', // Lebih kecil di perangkat mobile
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>

        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '22px' },
            lineHeight: '35px',
            mb: 3,
          }}
        >
          At R-Fitness, we believe in empowering individuals to achieve their fitness goals in a supportive and motivating environment. <br />
          Whether you're a seasoned athlete or just starting out, we have everything you need to succeed.
        </Typography>

        <Typography
          fontWeight={700}
          color="#FF2625"
          sx={{
            fontSize: { xs: '18px', sm: '32px' },
            lineHeight: '35px',
            mb: 4,
          }}
        >
          Check out the most effective exercises personalized here!
        </Typography>

        <Button
          variant="contained"
          color="error"
          onClick={() => navigate('/exercise')}
          sx={{
            mb: 4,
            fontSize: { xs: '14px', sm: '20px' },
            backgroundColor: '#ff2625',
            padding: '10px 30px',
            '&:hover': {
              backgroundColor: '#e31c19',
            },
          }}
        >
          Explore Exercises
        </Button>
      </Box>

     
  );
};

export default HeroBanner;
