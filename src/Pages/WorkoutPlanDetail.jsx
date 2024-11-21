import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, Divider } from '@mui/material';
import { fetchData, exerciseOptions } from '../Util/fetchData';
import Loader from '../Components/Loader/Loader';

const WorkoutPlanDetail = () => {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id: target } = useParams();

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
          exerciseOptions
        );
        setExercises(exercisesData);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercises();
  }, [target]);

  if (isLoading) return <Loader />;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' }, p: '20px' }}>
      <Typography variant="h4" fontWeight="bold" mb={4} textTransform="capitalize">
        {target} Targeted Exercises
      </Typography>

      <Grid container spacing={3}>
        {exercises.map((exercise) => (
          <Grid item xs={12} sm={6} md={4} key={exercise.id}>
            <Card>
              <CardContent>
                <img 
                  src={exercise.gifUrl} 
                  alt={exercise.name} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Typography variant="h6" mt={2}>
                  {exercise.name}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Equipment: {exercise.equipment}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Body Part: {exercise.bodyPart}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkoutPlanDetail;