import { createContext, useContext, useState } from "react";
import axiosInstance from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (url = "/everything?q=india") => {
    // console.log(import.meta.env.VITE_API_KEY); //? We have to use our .env variables like this
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
      //   console.log("Response is:", response?.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log("Error while fetching data:", error);
      setLoading(false);
    }
  };

  const values = {
    news,
    setNews,
    fetchNews,
    loading,
  };

  return <NewsContext.Provider value={values}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
