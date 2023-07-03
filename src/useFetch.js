import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}`;

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const [error, setError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else setError({ show: true, msg: data.Error });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
