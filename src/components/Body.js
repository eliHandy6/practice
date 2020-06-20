import React from "react"
// import ReactDom from "react-dom"

function Body(){
    var fname="zack"
    var lname="ogoma"
    return(
        <div style={{color:"red",marginLeft:"20px"}}>
            <p>Welcome {fname +" "+ lname}</p>
        </div>
    )

}

export  default  Body