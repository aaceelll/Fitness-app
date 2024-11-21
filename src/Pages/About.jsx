import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 6, mb: 6 }}>
        <Typography variant="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#FF5722' }}>
          About R-Fitness
        </Typography>

        <Typography variant="h5" paragraph align="justify" sx={{ mt: 4, color: '#333' }}>
          R-Fitness is your ultimate companion on the journey to a healthier, stronger, and happier life. We believe that fitness should be accessible, enjoyable, and adaptable to meet the needs and goals of each individual. In a world filled with information overload, R-Fitness stands as a clear, trustworthy guide in the vast world of fitness.
        </Typography>

        <Typography variant="h5" paragraph align="justify" sx={{ mt: 2, color: '#333' }}>
          Our app offers a comprehensive library of exercises, catering to all fitness levels from beginners to advanced athletes, covering every major muscle group. Whether you're aiming to build strength, lose weight, improve flexibility, or simply feel more energetic, R-Fitness provides the tools and support you need to succeed.
        </Typography>

        <Typography variant="h5" paragraph align="justify" sx={{ mt: 2, color: '#333' }}>
          Key features of R-Fitness include:
        </Typography>

        <Box component="ul" sx={{ pl: 4 }}>
          <li>
            <Typography variant="h6" align="justify">
              A vast, well-organized exercise database with detailed instructions and high-quality video demonstrations.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" align="justify">
              Personalized workout plans tailored to your current fitness level, goals, and preferences.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" align="justify">
              Comprehensive progress tracking to help you monitor your improvements and stay motivated.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" align="justify">
              Community support features, including challenges and group exercises to keep you engaged and inspired.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" align="justify">
              Access to expert advice and tips from certified fitness professionals and industry leaders.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" align="justify">
              Regularly updated content to keep your fitness journey fresh and exciting, with new exercises, routines, and fitness tips.
            </Typography>
          </li>
        </Box>

        <Typography variant="h5" paragraph align="justify" sx={{ mt: 4, color: '#333' }}>
          At R-Fitness, our mission is to empower individuals to take control of their health and well-being in a way that is both safe and sustainable. We are dedicated to creating a supportive environment where everyone, regardless of their background or fitness level, can feel motivated and encouraged to achieve their personal fitness goals.
        </Typography>

        <Typography variant="h5" paragraph align="justify" sx={{ mt: 2, color: '#333' }}>
          Join the R-Fitness community today and discover a path to better health that’s designed just for you. Our team is constantly working to improve your experience, introducing new features, and ensuring that every aspect of the app meets the highest standards. Let’s embark on this journey to a healthier, more fulfilling life together!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
