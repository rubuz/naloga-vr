import { useEffect, useState } from "react";

const useArtistData = (artistUuid) => {
  const [artistData, setArtistData] = useState(() => {
    const storedData = sessionStorage.getItem(`artistData-${artistUuid}`);
    return storedData ? JSON.parse(storedData) : null;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!artistData) {
      const fetchArtistData = async () => {
        try {
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
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchArtistData();
    }
  }, [artistUuid, artistData]);

  return { artistData, loading, error };
};

export default useArtistData;
