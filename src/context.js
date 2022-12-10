import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

// const API = "https://thapareactapi.up.railway.app"

const initialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "7Arrow.in",
        image: "./images/banner1.jpg",
      },
    });
  };
  
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "7Arrow.in",
        image: "./images/portfilo.jpg",
      },
    });
  };

//  to get the api data
// const getServices = async (url) => {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         dispatch({ type: "GET_SERVICES", payload: data});
//     } catch (error) {
//         console.log(error);
//     }
// };

//   to call the api
// useEffect(() => {
//     getServices(API);
// }, []);


  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// Global custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
