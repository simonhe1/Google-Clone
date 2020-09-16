// Custom Hook

import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "c0b9ead0a7f0cd13c";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return { data };
};
export default useGoogleSearch;
