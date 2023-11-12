import { getData } from "@/utils/api";
import { useState, useEffect } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | unknown>(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const res = await getData(8234251, abortController.signal);
        setData(res.data);
        setLoading(true);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, []);

  return { data, loading, error };
};
