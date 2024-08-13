import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
