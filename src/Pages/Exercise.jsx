import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchExercises from "../Components/SearchExercises/SearchExercises";
import Exercises from "../Components/Exercises/Exercises";

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <SearchExercises
        setExercises={setExercises} 
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises} 
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Exercise;