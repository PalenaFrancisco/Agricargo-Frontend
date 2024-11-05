import { useState, useEffect } from "react";

const useFetchData = (url, token, method = "GET") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading, setData };
};

export default useFetchData;
