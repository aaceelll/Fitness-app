export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "9ddbcad88fmsh41330ac037deb2cp155dbcjsn5d1bbd1a8c0d",
  },
};

export const workoutPlansOptions = {
  method: "GET",
  headers: { 
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "9ddbcad88fmsh41330ac037deb2cp155dbcjsn5d1bbd1a8c0d",
  },
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
