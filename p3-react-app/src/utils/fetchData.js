export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'eaf588e09bmshdec9ddb2f6700dep1d01b6jsn9d3bd206537d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
