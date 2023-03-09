import React, { Component } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import "./App.css";

class App extends Component {
  state = {
    filteredProducts: [],
  };

  //buttons functionality

  buttonhandler = (e) => {
    let filteredProducts;
    if (e.target.value === "All") {
      filteredProducts = this.getData("ALL");
    } else {
      this.getData(e.target.value);
    }

    this.setState({
      filteredProducts: filteredProducts,
    });
  };

  getData = (type) => {
    axios.get(`http://localhost:8080/api/food/?packageType=${type}`)
      .then((response) => {
        this.setState({
          filteredProducts: response.data,
        })
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });

  };

  render() {
    return (
      <div>
        <img className="logo" src="./foodablemain.jpg" alt="logo" />

        <div className="pageResults">
          <ItemList
            products={this.state.filteredProducts}
            buttonhandler={this.buttonhandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
