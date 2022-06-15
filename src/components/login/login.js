
import {Routes, Route, Navigate, Outlet, Link} from "react-router-dom"
import React, {useState, useContext, useEffect} from "react"
import PasswordForgotten from "./passwordForgotten"
import CreateAccount from "./createAccount"
import LoginForm from "./loginForm"
import style from "./login.module.css"

import {AuthContext} from "../../context"
function Login() {
const context = useContext(AuthContext)

    if(context.isLogged) return <Navigate to="/"/>
    
    return (<>
        <section className={style.loginContainer}>
            <div className={style.homePicture}></div>
            <div className={style.content}>

            <Routes>
                <Route path="" element={<LoginForm/>}/>
                <Route path="perdeu" element={<PasswordForgotten/>}/>
                <Route path="criar" element={<CreateAccount/>}/>
            </Routes>

            </div>
        </section>
    </>
    )
    
  
}

export default Login;