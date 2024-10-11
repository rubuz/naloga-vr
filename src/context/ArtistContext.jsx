import React, { createContext, useContext, useState, useEffect } from "react";

const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {
  const [artistData, setArtistData] = useState(() => {
    const storedData = localStorage.getItem("artistData");
    return storedData ? JSON.parse(storedData) : {};
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArtistData = async (artistUuid) => {
    if (artistData[artistUuid]) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://mocky.viberate.com/api/v1/${artistUuid}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const updatedData = { ...artistData, [artistUuid]: data };
      setArtistData(updatedData);
      localStorage.setItem("artistData", JSON.stringify(updatedData));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ArtistContext.Provider
      value={{ artistData, loading, error, fetchArtistData }}
    >
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtistData = () => {
  return useContext(ArtistContext);
};
