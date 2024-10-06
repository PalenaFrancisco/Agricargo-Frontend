export const fetchData = async (endpoint) => {
  try {
    const data = await fetch(endpoint);
    const response = await data.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
