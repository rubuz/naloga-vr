import { useEffect, useState } from "react";

const useNavbarData = () => {
  const [data, setData] = useState(() => {
    const storedData = sessionStorage.getItem("navbarData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!data.length) {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://mocky.viberate.com/api/v1/navbar"
          );
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          const data = await response.json();
          setData(data);
          sessionStorage.setItem("navbarData", JSON.stringify(data));
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
          initialLoad.current = false;
        }
      };
      fetchData();
    }
  }, [data]);

  return { data, loading, error };
};

export default useNavbarData;
