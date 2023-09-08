import { Button } from "@material-ui/core";
import React from "react";
import SearchResult from "./SearchResult";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 1 October to 31 October · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Luxury Pool Villa in Amphoe Pathio"
        title="on the beach with private courtyard and outdoor sala relaxing area."
        description="4 guests2 bedrooms2 beds2 bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={5}
        price="£143 / night"
        total="£1913 total"
      />

      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Lotus Bay"
        title="Turtle Bay HuaHin eco luxeTurt Villa in Lotus Bay"
        description="2 · guests1 · bedroom1 · bathroom · Wifi · Kitchen"
        star={4.98}
        price="£86 / night"
        total="£1313 total"
      />

      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Ko Samui"
        title="Bed and Breakfast"
        description="2 guests · 1 bedroom · 1 bed · 1 private bathroom · Free parking · Washing Machine"
        star={4.5}
        price="£87 / night"
        total="£1133 total"
      />
    </div>
  );
}

export default SearchPage;
