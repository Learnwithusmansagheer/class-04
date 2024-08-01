import React from 'react'
import './ListNumber.css'
const ListNumber =({heading,para})=>{
    return (
        <div className="number"style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'10px',marginTop:'45px'}}>
            <h1>{heading}</h1>
            <p>{para}</p>
        </div>
    )
}
export default ListNumber
