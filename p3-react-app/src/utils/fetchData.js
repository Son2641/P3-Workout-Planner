export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'aaae892de3msh2c4b175b2e9a743p115c63jsn794d404d5c9b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
