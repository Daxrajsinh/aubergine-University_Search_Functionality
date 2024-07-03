import React, { useState, useEffect } from "react";

export const API_URL = `http://universities.hipolabs.com`;

const useFetch = (apiParams) => {
    const [isLoading, setIsLoading] = useState(true);
    console.log("api params are:", apiParams)
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [university, setUniversity] = useState(null);
  
    const getUniversity = async (url) => {
        console.log(url);
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        
        console.log("data is :",data);
        if (data) {
          setIsLoading(false);
          setUniversity(data);
          setIsError({ show: "false", msg: "" });
        } else {
          setIsError({ show: "true", msg: data.Error });
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      let timeOut = setTimeout(() => {
        getUniversity(`${API_URL}/${apiParams}`);
      }, 1000);
    //   console.log("set");
      return () => {
        clearTimeout(timeOut);
        // console.log("clear");
      };
    }, [apiParams]);
    
    console.log("university", university)
    return { isLoading, isError, university };
  };
  
  export default useFetch;