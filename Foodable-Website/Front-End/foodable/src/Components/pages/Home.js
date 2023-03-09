import React from "react";
import "./cssFiles/Home.css";
import { Button_D, Button_R } from "../MPComponents/Button";

function Home() {
  return (
    <>
      {/* Main Content */}
      <div className="main_content">
        <Button_D className="btn-mobile-Donator" value="Donate Food">
          {" "}
          Donate Food
        </Button_D>
        <Button_R className="btn-mobile-Donator" value="Receive Food">
          {" "}
          Receive Food
        </Button_R>
      </div>
      <div className="main_content">
        <h3>
          At Foodable our focus is to tackle world hunger with healthy food
          packages that meet peoples different dietary equirements.
        </h3>
        <br />
        <h3>
          Foodable allows for people to use a single platform for creating
          packages for a preferred dieatry needs and for people that need them a
          place to find them!
        </h3>
        <br />
        <h3>Global Hunger is not the only thing we are after!</h3>
        <h4>
          {" "}
          Waste is another issues that has been increasing around the world
          <br /> to allow people to donate items that might get tossed away to
          someone that may need it.
        </h4>
        <br />
      </div>
      {/* Foodbank Locations */}
      <div className="main_content">
        <div id="finder" className="foodbank">
          <div className="Foodbank-container">
            <h4 className="heading-Foodbank">Find a foodbank near you</h4>
            <form method="get" action="Foodbank">
              <div className="finder__field">
                <input
                  type="text"
                  className="Foodbank-location"
                  placeholder="Town, city or postcode"
                />
              </div>
              <div className="finder__submit">
                <input
                  type="submit"
                  defaultValue="Search"
                  className="btn--blue"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Carousel  */}
      <div id="slider">
        <figure>
          <img src="../Img/Image_1.png" alt="Food_1" />
          <img src="../Img/pexels-fauxels-3184183.jpg" alt="Food_2" />
          <img src="../Img/pexels-pixabay-162927.jpg" alt="Donating_Food" />
          <img
            src="../Img/pexels-julia-m-cameron-6994993.jpg"
            alt="Donating_Food"
          />
          <img
            src="../Img/pexels-julia-m-cameron-6994944.jpg"
            alt="Donating_Food"
          />
        </figure>
      </div>
      {/* End Carousel  */}
      {/* End Main Content */}
    </>
  );
}

export default Home;
