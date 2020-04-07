import React, { useEffect, useState } from "react";
import { generalHttpRequest } from "../helpers/httpHelpers";
import baseUrl from "../config/baseUrl";

const useHttpRequest = () => {
  const [{ url, options }, setRequestData] = useState({});
  console.log(options);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}${url}`, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [{ response, error, loading }, setRequestData];
};

export default useHttpRequest;
