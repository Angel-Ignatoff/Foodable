
import React, {useState, useEffect} from 'react';
import "./cssFiles/Rewards.css";
//import "./cssFiles/Home.css";
import { Button_D, Button_R } from "../MPComponents/Button";
import RewardItem from "./Reward";
import Axios from "axios"

function Rewards() {
  const [Points, setPoints] = useState([])
  const [Name] = "Damian"
const [Surname] = "Mielech"

useEffect (() => {
  Axios.get("http://localhost:3001/api/get").then((response) =>{
setPoints(response.data)
  }) 
});


    return (
      <>
        {/* Main Content */}
        <div className="page_title">
  <h1 className="page_title">Foodable Rewards</h1>
</div>
<div className="page_description">
 
 <h3 className="page_description"> At foodable we are all about encouraging others to help,
     so for each donation we provide you with points which you can exchange for various rewards </h3>
</div>

<div className="page_points">

{Points.map((val) => {
return <h3 className="page_points">Available Points: {val.Points}  </h3>

})}
 
</div>

 <div className="rewards">
     
  <div className="rewards__container">
      <h1 className="page_points">Rewards available to claim</h1>
        <div className="rewards__wrapper">
        <ul className="rewards__items">

        <RewardItem
              src="../Img/sainsbury.jpg"
              text="100 Points Sainsbury's 10% off voucher"
              path="/Rewards"
              
            />
            
            <RewardItem
              src="./Img/sainsbury.jpg"
              text="100 Points Sainsbury's 10% off voucher"
              path="/Rewards"
              
            />
          </ul>

          <ul className="rewards__items">
        <RewardItem
              src="../Img/sainsbury.jpg"
              text="100 Points Sainsbury's 10% off voucher"
              
              path="/Rewards"
              
            />
            <RewardItem
              src="./Img/sainsbury.jpg"
              text="100 Points Sainsbury's 10% off voucher"
              path="/Rewards"
              
            />
          </ul>

          <ul className="rewards__items">
        <RewardItem
              src="../Img/sainsbury.jpg"
              text="100 Points Sainsbury's 10% off voucher"
              path="/Rewards"
              
            />
            <RewardItem
              src="./Img/sainsbury.jpg"
              text="100 Points Sainsbury's 10% off voucher"
              path="/Rewards"
              
            />
          </ul>
        
        </div>
      </div>
  </div>
  
  

  
        {/* End Main Content */}
      </>
    );
  }
  
  export default Rewards;
  