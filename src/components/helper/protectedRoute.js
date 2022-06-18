import { Navigate, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../context";
import User from "../user/user";
import Loading from "./loading";

export default function ProtectedRoute(){
    
    const context = useContext(AuthContext)
    
    if(context.isLogged === null) return <section className="container"><Loading/></section>
    if(context.isLogged === true) return <User/>
    return <Navigate to="/login"/>
    
}