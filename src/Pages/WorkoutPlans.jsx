import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import { fetchData, exerciseOptions } from '../Util/fetchData';
import WorkoutCard from '../Components/WorkoutCard/WorkoutCard';

const WorkoutPlans = () => {
  const [targetMuscles, setTargetMuscles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTargetMuscles = async () => {
      try {
        const targetList = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/targetList',
          exerciseOptions
        );
        if (targetList) {
          setTargetMuscles(targetList);
        }
      } catch (error) {
        console.error('Error fetching target muscles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTargetMuscles();
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' }, p: '20px' }}>
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Workout Programs by Target Muscle
      </Typography>

      <Grid container spacing={4}>
        {targetMuscles.map((target) => (
          <Grid item xs={12} sm={6} md={4} key={target}>
            <WorkoutCard target={target} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkoutPlans;