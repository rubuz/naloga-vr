import { useParams } from "react-router-dom";

import PlaceholderImg from "../../assets/images/placeholders/placeholder-200x200.png";

import useArtistData from "../../hooks/useArtistData";

import TooltipSubGenre from "./TooltipSubGenre";
import SocialList from "./SocialList";
import Graph from "./Graph";

const ArtistPage = () => {
  const { artistUuid } = useParams();
  const { artistData, loading, error } = useArtistData(artistUuid);

  if (!artistData && loading) {
    return (
      <div
        style={{
          fontWeight: "bold",
          display: "grid",
          placeItems: "center",
          height: "100dvh",
          fontSize: "2rem",
        }}
      >
        <p>Loading</p>
      </div>
    );
  }

  if (!artistData && error) {
    return (
      <div
        style={{
          fontWeight: "bold",
          display: "grid",
          placeItems: "center",
          height: "100dvh",
          fontSize: "2rem",
        }}
      >
        <p>Something went wrong!</p>
      </div>
    );
  }

  return (
    <div className="container">
      <main className="main">
        <section className="section section-artist-detail trending claimed">
          <div className="page">
            <div className="col visual">
              <figure>
                <img
                  src={
                    artistData.meta_image
                      ? artistData.meta_image
                      : PlaceholderImg
                  }
                  alt={artistData.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "scale-down",
                    backgroundColor: "black",
                  }}
                />
                <figcaption>
                  <button className="btn btn-claim-music-id">
                    Claim music_id
                  </button>
                </figcaption>
              </figure>
            </div>

            <div className="col-wrapper">
              <div className="col info">
                <div className="col-content">
                  <div className="info-wrapper">
                    <div className="title-wrapper">
                      <button className="btn btn-solid border btn-booking-request">
                        Booking Request
                      </button>
                      <h1 className="title">
                        {artistData.name}
                        <div className="tooltip-wrapper">
                          {artistData.claimed && (
                            <>
                              <span className="profile-claimed">
                                Profile claimed
                              </span>
                              <TooltipSubGenre />
                            </>
                          )}
                        </div>
                        {artistData.trending && (
                          <span className="trending-icon">Trending</span>
                        )}
                      </h1>
                    </div>

                    <div className="row">
                      <button className="btn btn-save long">Follow</button>
                      <button className="btn btn-share">
                        Share
                        <span>Link copied to clipboard</span>
                      </button>
                    </div>

                    <div className="row">
                      <label>Origin</label>
                      <a className="btn btn-filter-tag">
                        {artistData.country.name}
                      </a>
                    </div>

                    <div className="row">
                      <label>Genre</label>
                      <span className="btn btn-filter-tag">
                        {artistData.genre.name}
                      </span>
                    </div>

                    <div className="row">
                      <label>Subgenres</label>

                      {artistData.subgenres.map((subgenre) => (
                        <span key={subgenre.id} className="btn btn-filter-tag">
                          {subgenre.name}
                        </span>
                      ))}

                      <div className="tooltip-wrapper">
                        <button className="btn btn-add">Add subgenre</button>
                        <TooltipSubGenre />
                      </div>
                    </div>
                  </div>

                  <div className="footer-detail">
                    <SocialList socials={artistData.social_links} />
                  </div>
                </div>
              </div>

              <div className="col stats">
                <div className="col-content">
                  <Graph data={artistData.most_popular_in} />
                </div>
              </div>
            </div>

            <button className="btn btn-scroll-down">Scroll down</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArtistPage;
