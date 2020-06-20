import React from "react";
// import Body from "./Body";


const style={
    backgroundColor:"red",
    marginLeft:"20px",
    width:"98%"


}

const dateStyle={
    marginLeft:"20px",

}

var date =new Date();

var day =date.getDate();

var month=date.getMonth()

var year=date.getFullYear()

var time=date.getHours()

var mins=date.getMinutes()


var timeofday;

  if (time<12){
      timeofday="morning"
  }

  else if (time >=12 && time<17){
      timeofday="afternoon"

  }
  else{
      timeofday="night"
  }

function Footer(){
 

    return(
            <div >
            
            <h3 style={dateStyle}>The date today is {day+"-"+month+"-"+year +" "+time+":"+mins}</h3>

             <h4 style={{marginLeft:"20px",color:"green"}}>Good {timeofday}</h4>

            <footer style={style}>
                This is the project footer
            </footer>

        </div>
    )

}

export default Footer;