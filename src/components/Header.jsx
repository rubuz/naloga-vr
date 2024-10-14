import Logo from "../assets/logo-v.svg";
import useNavbarData from "../hooks/useNavbarData";

const Header = () => {
  const { data, loading, error } = useNavbarData();

  return (
    <header className="header">
      <div className="page">
        <a href="/" className="logo">
          <img src={Logo} alt="Viberate" /> Viberate
        </a>

        <nav className="navigation-primary">
          <ul className="menu-sys">
            <li>
              <button className="btn btn-menu search">Search</button>
            </li>
            <li>
              <button className="btn btn-menu more">More</button>
            </li>
          </ul>

          <ul className="menu">
            {loading ? (
              <li>Loading...</li>
            ) : error ? (
              <li>Something went wrong!</li>
            ) : (
              data.map((artist) => (
                <li key={artist.artist_uuid}>
                  <a href={`/${artist.artist_uuid}`}>{artist.artist_name}</a>
                </li>
              ))
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
