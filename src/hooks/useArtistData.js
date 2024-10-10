import { useEffect, useState } from "react";

const useArtistData = (artistUuid) => {
  const [artistData, setArtistData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await fetch(
          `https://mocky.viberate.com/api/v1/${artistUuid}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setArtistData(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtistData();
  }, [artistUuid]);

  return { artistData, loading, error };
};

export default useArtistData;
