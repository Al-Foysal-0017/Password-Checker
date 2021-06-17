import React from 'react'

const ProgressBar = ({count}) => {
    return (
        <div style={{display: 'flex', flexDirection:"row", marginTop:"10px"}}>
            <progress style={{color:"#cd5c5c"}} value={count} max="4"></progress>
            {count===0  && <span style={{color:'red', paddingLeft:"5px"}}>Very Week</span> ||
            count===1  && <span style={{color:"#900C3F", paddingLeft:"5px"}}> Week</span>||
            count===2  && <span style={{color:'#F39C12', paddingLeft:"5px"}}>Good</span>||
            count===3  && <span style={{color:'green', paddingLeft:"5px"}}>Strong</span>||
            count===4  && <span style={{fontWeight:'bold' ,color:'green', paddingLeft:"5px"}}>Very Strong</span>}
        </div>
    )
}

export default ProgressBar
