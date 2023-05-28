export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '94e860a3a9mshc6d23a30c8cae43p12e52cjsn7676ecb0ac8f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
