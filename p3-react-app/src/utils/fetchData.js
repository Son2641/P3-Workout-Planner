export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b02845737dmsh705e3a846b2c591p11058bjsnb7c751f3b374',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
