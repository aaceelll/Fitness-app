import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './Pages/ExerciseDetail';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Exercise from './Pages/Exercise';
import WorkoutPlans from './Pages/WorkoutPlans';
import WorkoutPlanDetail from './Pages/WorkoutPlanDetail';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/workout-plans" element={<WorkoutPlans />} />
      <Route path="/workout-plans/:id" element={<WorkoutPlanDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Box>
);

export default App;