import {useState, useEffect} from 'react';

function Tile({imageUrl}) {
    const [clicked, setClicked] = useState(false);


    function handleClick() {
        setClicked(!clicked)
    }

    return <div style = {{
        height: '295px',
        width: '210px', 
        border: '4px solid white',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center', 
                backgroundImage: `url(${imageUrl})`,
            }} onClick={handleClick} id='tile'>
            </div>    ;
     
}

export default Tile;