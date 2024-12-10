import { createContext } from "react";
import useAxios from "../gettingAPI";

const AdsContext = createContext({});

const AdsContextProvider = ({ children }) => {
  const { data: ads, loading, error } = useAxios({ url: "advertisement" });

  if (loading) return <div>Loading advertisements...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <AdsContext.Provider value={{ ads }}>
      {children}
    </AdsContext.Provider>
  );
};

export { AdsContextProvider, AdsContext };
