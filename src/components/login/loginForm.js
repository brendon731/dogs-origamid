import { useState, useContext } from "react"
import {AuthContext} from "../../context"
import style from "./loginForm.module.css"
import {Link} from "react-router-dom"
import Input from "../forms/input"
import Button from "../forms/button"

import FormField from "./formField"
import Head from "../helper/head"
import useForm from "../helper/useForm"

export default function Login(){

    const [error, setError] = useState(false)
    const username = useForm()
    const password = useForm()

    const context = useContext(AuthContext)

    async function Login(evt){
        evt.preventDefault()
        
        setError(false)
        
        const res = await context.userLogin({username:username.value, password:password.value})
        if(res) setError(res.message)
        
        
    }
    return(
        <>
        <Head title="login"/>

        <form onSubmit={Login}>
            <FormField title="Login">
            
                <Input title={"Usuario:"} {...username}/>
                <Input title={"Senha:"} type="password" {...password}/>
                {error && <span className="errorMessage">{error}</span>}

                <Button disabled={context.isLoadingUser}>{context.isLoadingUser?"carregando...":"login"}</Button>  
                <Link to="perdeu" className={style.passwordLost}>Perdeu a senha?</Link>
            </FormField>
        </form>
        <form>
            
            <FormField title="Cadastre-se">
                <p style={{padding:"1em 0"}}>Ainda mão possui uma conta? Cadastre-se no site.</p>

                <Link to="criar">
                    <Button>Cadastro</Button>
                </Link>
            </FormField>
        </form>
        
        

        </>
    )
}