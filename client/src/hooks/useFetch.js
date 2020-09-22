import { useEffect, useState } from "react";

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.eliteprospects.com/v1/leagues/shl/standings?apiKey=${process.env.REACT_APP_API_KEY}&fields=*`
        );
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};

export default useFetch;
