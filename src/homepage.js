import React, {useContext} from "react"
import {AuthContext} from "./context"
import {Navigate} from "react-router-dom"
import Feed from "./components/feed/feed"
export default function Homepage(){
    const context = useContext(AuthContext)
    

    return <div className="container">
        <Feed/>
    </div>
    
    
        
}