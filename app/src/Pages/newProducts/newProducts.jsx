import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMedia from "./CardMedia"


function New(){

    const[cosmetics, setCosmetics] = useState(null);

    const getData = async () => {
        const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');

        setCosmetics(response.data);
    };


    useEffect(() => {
            try{
                getData();
            }catch (e){
                console.log("Error");
            }   
    }, []);


    return(
        cosmetics && <CardMedia prds={cosmetics}></CardMedia>
         );
}

export default New;