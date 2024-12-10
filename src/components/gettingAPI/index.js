import { useEffect, useState } from "react";
import axios from "axios";
const useAxios = ({ url, method = "GET", body }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        setData(data.data), setLoading(false);
      })
      .catch((error) => {
        setError(error.message), setLoading(false);
      });
  }, []);
  return { data, loading, error };
};

export default useAxios;
