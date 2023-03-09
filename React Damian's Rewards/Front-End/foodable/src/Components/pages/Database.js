import React, {useState, useEffect} from 'react';
import "./cssFiles/Database.css";
//import "./cssFiles/Home.css";
import { Button_D, Button_R } from "../MPComponents/Button"
import Axios from "axios"

function Database() {

const [Name, setName] = useState("")
const [Surname, setSurname] = useState("")

const submit= () => {
Axios.post("http://localhost:3001/api/insert", {
    name: Name,
     surname: Surname
    }).then(() => {
        alert("Successful insert");
    })
};

    return (
<div className="Database">

    <h1>CRUD APPLICATION</h1>

<div className="form"> 
<label>Name: </label>
<input type="text" name="Name" onChange={(e) => {
    setName(e.target.value)
}}/>
<label>Surname: </label>
<input type="text" surname="Surname" onChange={(e) => {
    setSurname(e.target.value)
}}/>


<button onClick={submit}>Send</button>
</div>
</div>

)
}


export default Database;