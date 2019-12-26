import { useState, useEffect } from "react";

// type UseFetch = <S>(
//   url: string,
//   options?: RequestInit
// ) => {
//   data: S;
//   error?: any;
//   loading: boolean;
// };

const useFetch: <S>(
  url: string,
  options?: RequestInit
) => {
  data: S;
  error?: any;
  loading: boolean;
} = (url, options) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  return { data, error, loading };
};

export default useFetch;
