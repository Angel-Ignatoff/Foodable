import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the features of our Website!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../Img/Image_1.png"
              text="Send food to a foodbank to help people in need"
              label="Donation"
              path="/Donation"
            />
            <CardItem
              src="./Img/Receiving-Food.jpg"
              text="Check our website to see if there is food?"
              label="Looking for Food?"
              path="/Receiver"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./Img/FoodB.jpg"
              text="Find Foodbanks near you "
              label="Foodbanks"
              path="/Foodbank"
            />
            <CardItem
              src="./Img/Contact.jpg"
              text="Send us an email or Call Us"
              label="Contact Us"
              path="/Contact"
            />
            <CardItem
              src="./Img/Social-Media.jpg"
              text="Check our Social Media"
              label="Social Media"
              path="/Receiver"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
