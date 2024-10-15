import { useEffect, useState } from "react";

const useArtistData = (artistUuid) => {
  const [artistData, setArtistData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchArtistData = async () => {
      setLoading(true);
      try {
        const storedData = sessionStorage.getItem(`artistData-${artistUuid}`);
        if (storedData) {
          setArtistData(JSON.parse(storedData));
        } else {
          const response = await fetch(`${url}${artistUuid}`);
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          const data = await response.json();
          setArtistData(data.data);
          sessionStorage.setItem(
            `artistData-${artistUuid}`,
            JSON.stringify(data.data)
          );
        }
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
