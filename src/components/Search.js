import { Button } from "@material-ui/core";
import { SearchOutlined, Mic } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import "./Search.css";

const Search = ({ hideButtons }) => {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (event) => {
    event.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  console.log(hideButtons);

  return (
    <form className="search">
      <div className="search_input">
        <SearchOutlined className="search_input_icon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Mic />
      </div>
      <div className={`search_buttons ${hideButtons ? "hidden" : ""}`}>
        <Button type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
};

export default Search;
