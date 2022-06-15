import React from "react"
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context";
import {ReactComponent as Feed} from "../../Assets/feed.svg"
import {ReactComponent as Estatisticas} from "../../Assets/estatisticas.svg"
import {ReactComponent as Adicionar} from "../../Assets/adicionar.svg"
import {ReactComponent as Sair} from "../../Assets/sair.svg"

import style from "./userHeader.module.css"
import useMedia from "../../hooks/useMedia";


export default function UserHeader(){
    const context = useContext(AuthContext)
    const [title, setTitle] = useState("")
    const [isButtonActive, setIsButtonActive] = useState(false)
    const isMobile = useMedia("(max-Width:768px)")
    const location = useLocation()

    useEffect(()=>{
        setIsButtonActive(false)
        const {pathname} = location
        switch(pathname){
            case "/conta/estatisticas":
                setTitle("Estatísticas")
                break
            case "/conta/postar":
                setTitle("Poste sua foto")
                break
            default:
                setTitle("Minha Conta")
                break
        }
    },[location])

    return(
        <section className={"container " + style.userHeader}>
            <h2 className="title">{title}</h2>
            {isMobile && <button 
            arial-label="menu"
            className={`${style.mobileButton} ${isButtonActive && style.mobileButtonActive}`} 
            onClick={()=>setIsButtonActive(!isButtonActive)}
            ></button>}

            <nav className={isMobile?style.navMobile:style.nav}>
                <NavLink className={({isActive})=>isActive?style.active:null} to="/conta" title="Minhas fotos" end>
                    <Feed/>
                    {isMobile && "minhas fotos"}
                </NavLink>
                <NavLink className={({isActive})=>isActive?style.active:null} to="postar" title="Postar fotos">
                    <Adicionar/>
                    {isMobile && "Postar fotos"}

                </NavLink>
                <NavLink className={({isActive})=>isActive?style.active:null} to="estatisticas" title="estatisticas">
                    <Estatisticas/>{isMobile && "Estatisticas"}
                </NavLink>
                <a href="#" onClick={context.userLogout} title="Sair">
                    <Sair/>
                    {isMobile && "Sair"}

                </a>

            </nav>
        </section>
    )
}