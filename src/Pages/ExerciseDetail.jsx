import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData } from "Util/fetchData";
import Detail from "Components/Detail/Detail";
import ExerciseVideos from "Components/ExerciseVideos/ExerciseVideos";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <>
      <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exerciseDetail.name}
        />
        
      </Box>
    </>
  );
};

export default ExerciseDetail;