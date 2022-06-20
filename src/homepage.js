import React from "react"
import Feed from "./components/feed/feed"
import Head from "./components/helper/head"
export default function Homepage(){
    
    return (
    <section className="container">
        <Head title="Fotos" description="Home do site Dogs, com o feed de fotos"/>
        <Feed/>
    </section>)
    
    
        
}