
import React,{useContext} from "react"
import {Link, useNavigate} from "react-router-dom"
import style from "./header.module.css"
import { ReactComponent as Dogs } from ".././Assets/dogs.svg"

import {AuthContext} from ".././context"

export default function Header(){
    const context = useContext(AuthContext)
    const navigate = useNavigate()

    

    return(
        <header className={style.header}>
            <nav className={"container " + style.container}>
                <Link to="/" className={style.logo}>
                    <Dogs/>
                </Link>
                <ul className={style.login}>
                    {context.isLoadingUser?
                        <>
                            <li><a href="#">carregando...</a></li>
                        </>
                        :
                        context.isLogged?
                        <>
                            <li><Link to="conta">{context.data.username}</Link></li>
                            {/* <li> <button onClick={userLogout}>sair</button></li> */}
                        </>:
                            <li><Link to="login">Login / Criar</Link></li>
                            
                        }
                </ul>
                
            </nav>
        </header>
    )
}