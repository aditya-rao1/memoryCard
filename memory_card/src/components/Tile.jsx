function Tile() {


    let component = (
        <div style = {{
            height: '100px',
            width: '200px', 
            border: '4px solid white',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
        }}> 
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