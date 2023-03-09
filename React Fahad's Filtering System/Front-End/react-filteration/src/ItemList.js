
import React from 'react'
import SingleItem from './singleItem'

export default function ItemList(props) {
  return (

    <React.Fragment>
        <div className = "instruction"> Please select a filter</div>
        <div className="btns">
            <button value='All' onClick = {props.buttonhandler}>All</button>
            <button value='Halal'onClick = {props.buttonhandler}>Halal</button>
            <button value='Vegan' onClick = {props.buttonhandler}>Vegan</button>
            <button value='Vegeterian' onClick = {props.buttonhandler}>Vegeterian</button>

        </div>
        
        <div>  
        {props.products.map(product=>{
            return <SingleItem key={product.packageID} product={product}/>
        })}
        </div>
    </React.Fragment>
   
  )
}
