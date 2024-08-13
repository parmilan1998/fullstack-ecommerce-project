import { useState } from "react";
import axios from "axios";

const usePost = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const postData = (payload) => {
    setIsLoading(true);
    axios
      .post(url, payload)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  return { data, isLoading, error, postData };
};

export default usePost;
