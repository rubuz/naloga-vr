import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="section section-artist-detail trending claimed">
          <div className="page">
            <div className="col visual">
              <figure style={{ backgroundColor: "pink" }}>
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
                        Siddharta Lorem Ipsum Dolor Isamet
                        <div className="tooltip-wrapper">
                          <span className="profile-claimed">
                            Profile claimed
                          </span>
                          <div className="tooltip">
                            <h3>Vote for subgenres</h3>
                            <p>
                              Don’t agree with the subgenres? Add the ones you
                              think are missing or vote for existing to get
                              yours on top!
                            </p>
                            <div className="stats-sheet">
                              <div className="row">
                                <h5>Alternative rock</h5>
                                <div className="graph-line">
                                  <span
                                    className="line"
                                    style={{ width: "47%" }}
                                  >
                                    47%
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <h5>Alternative metal</h5>
                                <div className="graph-line">
                                  <span
                                    className="line"
                                    style={{ width: "23%" }}
                                  >
                                    23%
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <h5>Progressive rock</h5>
                                <div className="graph-line">
                                  <span
                                    className="line"
                                    style={{ width: "15%" }}
                                  >
                                    15%
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p>
                              <button className="btn btn-shadow">
                                Vote now
                              </button>
                            </p>
                          </div>
                        </div>
                        <span className="trending-icon">Trending</span>
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
                      <a className="btn btn-filter-tag">Slovenia</a>
                    </div>

                    <div className="row">
                      <label>Genre</label>
                      <span className="btn btn-filter-tag">Rock</span>
                    </div>

                    <div className="row">
                      <label>Subgenres</label>
                      <span className="btn btn-filter-tag">
                        Alternative rock
                      </span>
                      <span className="btn btn-filter-tag">
                        Alternative metal
                      </span>
                      <span className="btn btn-filter-tag">
                        Progressive rock
                      </span>
                      <div className="tooltip-wrapper">
                        <button className="btn btn-add">Add subgenre</button>
                        <div className="tooltip">
                          <h3>Vote for subgenres</h3>
                          <p>
                            Don’t agree with the subgenres? Add the ones you
                            think are missing or vote for existing to get yours
                            on top!
                          </p>
                          <div className="stats-sheet">
                            <div className="row">
                              <h5>Alternative rock</h5>
                              <div className="graph-line">
                                <span className="line" style={{ width: "47%" }}>
                                  47%
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <h5>Alternative metal</h5>
                              <div className="graph-line">
                                <span className="line" style={{ width: "23%" }}>
                                  23%
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              <h5>Progressive rock</h5>
                              <div className="graph-line">
                                <span className="line" style={{ width: "15%" }}>
                                  15%
                                </span>
                              </div>
                            </div>
                          </div>
                          <p>
                            <button className="btn btn-shadow">Vote now</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footer-detail">
                    <ul className="social-list">
                      <li>
                        <a href="#" className="btn social-icon facebook">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon twitter">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon instagram">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon spotify">
                          Spotify
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon songkick">
                          Songkick
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon soundcloud">
                          soundcloud
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon youtube">
                          youtube
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon beatport">
                          beatport
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon mixcloud">
                          mixcloud
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon gigatools">
                          gigatools
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon eventbrite">
                          eventbrite
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon skiddle">
                          skiddle
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon ticketmaster">
                          ticketmaster
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon tumblr">
                          tumblr
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon google_plus">
                          google_plus
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="btn social-icon google_play_music"
                        >
                          google_play_music
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon bandsintown">
                          bandsintown
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon itunes">
                          itunes
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon shazam">
                          shazam
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon deezer">
                          deezer
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon medium">
                          medium
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon telegram">
                          telegram
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon home_page">
                          home_page
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon tidal">
                          tidal
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon napster">
                          napster
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn social-icon amazon_music">
                          amazon_music
                        </a>
                      </li>
                    </ul>

                    <div className="tooltip-wrapper">
                      <button className="btn btn-add">Add links</button>
                      <div className="tooltip">
                        <h3>Got more info?</h3>
                        <p>
                          Add Place's links so everyone can see their social
                          media highlights.
                        </p>
                        <p>
                          <button className="btn btn-shadow">Add links</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col stats">
                <div className="col-content">
                  <div className="stats-sheet">
                    <label>Most popular in</label>
                    <div className="row">
                      <h5>Ljubljana</h5>
                      <div className="graph-line">
                        <span className="line" style={{ width: "42%" }}>
                          47%
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <h5>Maribor</h5>
                      <div className="graph-line">
                        <span className="line" style={{ width: "22%" }}>
                          23%
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <h5>Celje</h5>
                      <div className="graph-line">
                        <span className="line" style={{ width: "15%" }}>
                          15%
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <h5>Postojna</h5>
                      <div className="graph-line">
                        <span className="line" style={{ width: "11%" }}>
                          11%
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <h5>Koper</h5>
                      <div className="graph-line">
                        <span className="line" style={{ width: "9%" }}>
                          9%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-scroll-down">Scroll down</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
