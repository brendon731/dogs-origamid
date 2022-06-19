import React, {useContext} from "react"
import {AuthContext} from "./context"
import {Navigate} from "react-router-dom"
import Feed from "./components/feed/feed"
import Head from "./components/helper/head"
export default function Homepage(){
    const context = useContext(AuthContext)
    

    return (
    <section className="container">
        <Head title="Fotos" description="Home do site Dogs, com o feed de fotos"/>
        <Feed/>
    </section>)
    
    
        
}