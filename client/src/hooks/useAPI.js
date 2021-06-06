import { useEffect, useState } from "react";
import { validateStatus } from "../helpers/api";

const useAPI = ({ initialUrl }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    let mounted = true;

    const fetchAPI = async () => {
      if (!url) {
        return;
      }

      setIsLoading(true);

      console.log(url);
      try {
        const response = await fetch(url);
        if (mounted && validateStatus(response.status)) {
          const body = await response.json();
          setData(body);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAPI();

    return () => {
      mounted = false;
    };
  }, [url]);

  return [{ isLoading, data }, setUrl];
};

export default useAPI;
