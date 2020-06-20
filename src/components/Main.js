import React from "react"

function Main(){
    return(

        <Switch>
            <Route exact path ="/" component ={"LandingPage"}/>
            <Route exact path ="/contact" component ={"Contact"}/>
            <Route exact path ="/notification" component ={"Notification"}/>
            

        </Switch>

    )
    
}
export default Main;