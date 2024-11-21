import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchData, exerciseOptions } from '../../Util/fetchData';

const WorkoutCard = ({ target }) => {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPreviewImage = async () => {
      try {
        const exercises = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/target/${target}?limit=1`,
          exerciseOptions
        );
        if (exercises && exercises.length > 0) {
          setPreviewImage(exercises[0].gifUrl);
        }
      } catch (error) {
        console.error('Error fetching preview image:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPreviewImage();
  }, [target]);

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease-in-out'
        }
      }}
    >
      {isLoading ? (
        <Skeleton variant="rectangular" height={200} />
      ) : (
        <CardMedia
          component="img"
          height="200"
          image={previewImage || `/placeholder.svg?height=300&width=400&text=${target}`}
          alt={target}
          sx={{
            objectFit: 'cover',
            bgcolor: 'background.paper'
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" textTransform="capitalize">
          {target} Workouts
        </Typography>
        <Typography mb={2}>
          Complete workout routines targeting your {target}
        </Typography>
        <Button 
          variant="contained" 
          color="error"
          onClick={() => navigate(`/workout-plans/${target}`)}
          sx={{ 
            backgroundColor: '#ff2625',
            '&:hover': {
              backgroundColor: '#e31c19'
            }
          }}
        >
          View Exercises
        </Button>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;