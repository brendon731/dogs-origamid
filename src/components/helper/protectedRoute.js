import { Navigate, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../context";
import User from "../user/user";

export default function ProtectedRoute(){
    
    const context = useContext(AuthContext)

    if(context.isLogged === null) return <h1 style={{marginTop:"150px"}}>carregando...</h1>
    if(context.isLogged === true) return <User/>
    return <Navigate to="/login"/>
    
}