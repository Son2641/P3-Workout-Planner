export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6a70bcc909msh78f5fb29490d89bp199a31jsn6003154404e4',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
