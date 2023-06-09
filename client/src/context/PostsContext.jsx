import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const postContext = createContext();

export const usePosts = () => {
    const context = useContext(postContext);
    return context;
};

export const PostsProvider = ({ children }) => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        setPosts(response.data);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      }
    };

    fetchData();
  }, []);

  
  return (
      <postContext.Provider
        value={{
          posts,
        }}
      >
        {children}
      </postContext.Provider>
    );
}
