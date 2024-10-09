import React from "react";
import { useParams } from "react-router-dom";
import useArtistData from "../hooks/useArtistData";

const ArtistPage = () => {
  const { artist_uuid } = useParams();
  const { artistData, loading, error } = useArtistData(artist_uuid);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{artistData.artist_name}</h1>
      {/* Display other artist data as needed */}
    </div>
  );
};

export default ArtistPage;
