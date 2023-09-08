import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Banner.css";
import Search from "./Search";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}

        <Button
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Make your dreams come true</h1>
        <h5>
          See all the parts of the world you've only dreamed of.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore paradise
        </Button>
      </div>
    </div>
  );
}

export default Banner;
