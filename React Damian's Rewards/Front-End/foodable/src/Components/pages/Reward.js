import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Rewards from "./Rewards";
function RewardItem(props) {
var point = 50;
  const calculate= () => {

    if (Rewards.value>= point){
alert("Reward has been sent to email!")
    } else {

      alert("Not enough points!")
      
    }
 



    };

  return (
    
      <li className="rewards__item">

<button className="button"onClick={calculate}>
        <Link className="rewards__item__link" to={props.path}> 
          <figure className="rewards__item__pic-wrap" data-category={props.label}>
            <img className="rewards__item__img" alt="Features" src={props.src} />

            
          </figure>
          
          
          <div className="rewards__item__info">
           <h5 className="rewards__item__text">{props.text}</h5>

         </div>
         
        </Link>
</button>
      </li>
      
    
  );
}

export default RewardItem;