import React from "react";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="app__section">
    
        <Card
          src="https://ik.imagekit.io/dgmfafxequ/places/tr:w-720/unique_mSddKZ5Ls.webp"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
            <Card
          src="https://ik.imagekit.io/dgmfafxequ/places/tr:w-720/castle_6AR5jXdsp.webp"
          description="Enjoy the amazing sights of Tuscany in this real life Castle"
          price="£350/night"
        />
        <Card
          src="https://ik.imagekit.io/dgmfafxequ/places/tr:w-720/hut_9rzlSipdb.webp"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="app__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
    </div>
  );
}

export default Home;
