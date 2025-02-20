import {useState, useEffect} from 'react';

//tutorial for tm --> https://www.youtube.com/watch?v=ZRFwuGpiLl4&ab_channel=GhostTogether
//api url for an example image...

const url = "https://api.tvmaze.com/shows/62483/images"


function Tile() {
    const [clicked, setClicked] = useState(false);
    const [originalImageURL, setOGImageURL] = useState("");
    const [newImageURL, setNewImageURL] = useState("");
    let component;

    useEffect(() => { 
        const fetchData = async () => {
            const result = await fetch(url)
            result.json().then(json => {
                const jsonObject = JSON.parse(JSON.stringify(json));
                const url = jsonObject[1].resolutions.medium.url;
                const newURL = jsonObject[0].resolutions.original.url;
                setOGImageURL(url);
                setNewImageURL(newURL);
            })
        }
        fetchData()
    }, [])

    function handleClick() {
        setClicked(true)
    }
    function secondClick() {
        setClicked(false)
    }

    if(clicked) {
        component = (
            <div style = {{
                height: '550px',
                width: '980px', 
                border: '4px solid red',
                display: 'flex',
                justifyContent: 'center',
                backgroundImage: `url(${newImageURL})`,}} onClick = {secondClick}
            >
            </div>    );
    }
    else {
        component = (
            <div style = {{
                height: '295px',
                width: '210px', 
                border: '4px solid white',
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center', 
                backgroundImage: `url(${originalImageURL})`,
            }} onClick={handleClick} id='tile'>
            </div>    );
    }
     

    return component;
        
}

export default Tile;