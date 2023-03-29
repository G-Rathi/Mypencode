import React from "react";
const Search=({searchFunc,query})=>{
    const style={
        width:"15rem",
        height:"2.5rem",
        borderRadius:"1rem",
        textAlign:"center",
        backgroundColor:"#f2f5f3",
    }
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <input  style={style} value={query} type="search" placeholder="Search by name here" onChange={searchFunc}></input>
        </div>
    )
}

export default Search;