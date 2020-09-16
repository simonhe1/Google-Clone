import React from "react";
import "./Home.css";
import { Apps, Mic } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_header_left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home_header_right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <Apps />
          <Avatar />
        </div>
      </div>

      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google logo"
        />
        <div className="home_input_container">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
