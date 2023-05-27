export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6d6404efd7msh886bf67c0ed5d26p131b43jsna56431448b6d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
