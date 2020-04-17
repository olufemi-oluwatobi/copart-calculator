import React, { useEffect, useState } from "react";
import { generalHttpRequest } from "../helpers/httpHelpers";
import baseUrl from "../config/baseUrl";

const useHttpRequest = () => {
  const [{ url, options }, setRequestData] = useState({});
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}${url}`, {
          ...options,
          headers: options.headers || {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        const response = await res.json();
        const { code, data } = response;
        if (code === 200) {
          setResponse(data);
          setRequestData({});
        } else {
          setRequestData({});
          setError("failed to submit");
        }
      } catch (error) {
        setError(error.message);
        setRequestData({});
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [{ response, error, loading, setError }, setRequestData];
};

export default useHttpRequest;
