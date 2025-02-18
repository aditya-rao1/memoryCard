import {useState, useEffect} from 'react';

//tutorial for tm --> https://www.youtube.com/watch?v=ZRFwuGpiLl4&ab_channel=GhostTogether


//api url for an example image...

const url = "https://api.tvmaze.com/shows/62483/images"


function Tile() {

    const [clicked, setClicked] = useState(false);

    useEffect(() => { 
        const fetchData = async () => {
            const result = await fetch(url)
            result.json().then(json => {
                const jsonObject = JSON.parse(JSON.stringify(json));
                const url = jsonObject[2].resolutions.original.url;
            })
        }
        fetchData()
    }, [])

    let component = (
        <div style = {{
            height: '100px',
            width: '200px', 
            border: '4px solid white',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
        }} 
        > 
            Tile
        </div>
    )


    return (<div style = {{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '10px',
        gridAutoRows: 'minmax(100px, auto)',
    }}>
    
        <div>
            {component} 
            {component} 
            {component}
            {component}
        </div>
        
        <div>
            {component} 
            {component} 
            {component}
            {component}
        </div>
        <div>
            {component} 
            {component} 
            {component}
            {component}
        </div>
        <div>
            {component} 
            {component} 
            {component}
            {component}
        </div>
        <div>
            {component} 
            {component} 
            {component}
            {component}
        </div>
        <div>
            {component} 
            {component} 
            {component}
            {component}
        </div>
         </div>);
        
}

export default Tile;