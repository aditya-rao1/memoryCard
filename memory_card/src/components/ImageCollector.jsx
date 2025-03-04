import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tile from './Tile.jsx';

//What you need to do is to extract all the images in the Useeffect. 
//from there pass it as a prop into the Tile component. 


// https://www.youtube.com/watch?v=37vxWr0WgQk&ab_channel=BroCode

//Finish watchtching above video to understand fetch. 

function ImageCollector() { //16x16 so we need about 16 different image links, relatively having the same size
    const urls = [
        "https://api.tvmaze.com/shows/37196/images",
        "https://api.tvmaze.com/shows/112/images", 
        "https://api.tvmaze.com/shows/48450/images",
        "https://api.tvmaze.com/shows/504/images",
        "https://api.tvmaze.com/shows/50777/images",

        "https://api.tvmaze.com/shows/84/images", 
        "https://api.tvmaze.com/shows/488/images",
        "https://api.tvmaze.com/shows/1536/images",
        "https://api.tvmaze.com/shows/919/images",
        "https://api.tvmaze.com/shows/80375/images"
    ]     

    const [imageUrls, setImageUrls] = useState([]);


    async function fetchData(url) { //Async function will make a function return a promise. Await means it will wait until this action is done. 
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error("This response is messed up.")
            }
            const data = await response.json();
            const jsonObject = JSON.parse(JSON.stringify(data));
            const imageUrl = jsonObject[0].resolutions.medium.url; 
            return imageUrl;
        }
        catch(error) {
            console.log("Error fetching data:", error);
        }
    }

    async function processUrls(urls) {
        const promises = urls.map(url => fetchData(url)); //The method map() creates an array. we map each item in the array to fetchData. 
                                                            //Promises are returned from fetchData.
        const results = await Promise.all(promises); 
        return results;
    }


    useEffect(() => {
        processUrls(urls).then((data) => {
            setImageUrls(data);
            console.log(data);
            console.log(imageUrls); //this is showing up as empty. tm debug why 
        }, () =>{
            console.log("Error fetching data");
        })
      }, []);
    

    
    //pass tile properties below
    return <>
        <Tile imageUrl={imageUrls[0]}/> 
    </>
}

export default ImageCollector;