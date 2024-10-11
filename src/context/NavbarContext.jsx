import { createContext, useContext, useEffect, useState, useRef } from "react";

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("navbarData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [loading, setLoading] = useState(!data.length);
  const [error, setError] = useState(null);
  const initialLoad = useRef(true);

  useEffect(() => {
    if (initialLoad.current && !data.length) {
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
          localStorage.setItem("navbarData", JSON.stringify(data));
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

  return (
    <NavbarContext.Provider value={{ data, loading, error }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarData = () => {
  return useContext(NavbarContext);
};
