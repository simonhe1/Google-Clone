import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import {
  ArrowDropDown,
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";

const SearchPage = () => {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  return (
    <div className="search_page">
      <div className="search_page_header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="google logo"
            className="search_page_header_logo"
          />
        </Link>
        <div className="search_page_header_body">
          <Search hideButtons />
          <div className="search_page_header_options">
            <div className="search_page_header_options_left">
              <div className="search_page_header_options_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search_page_header_options_option">
                <Description />
                <Link to="/mews">News</Link>
              </div>
              <div className="search_page_header_options_option">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              <div className="search_page_header_options_option">
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="search_page_header_options_option">
                <Room />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="search_page_header_options_option">
                <MoreVert />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="search_page_header_options_right">
              <div className="search_page_header_options_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="search_page_header_options_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="search_page_results">
          <p className="search_page_results_count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="search_page_result">
              <a href={item.link} className="search_page_result_link">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="search_page_result_image"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
                <ArrowDropDown className="search_page_result_icon" />
              </a>
              <a className="search_page_result_title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="search_page_result_snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
