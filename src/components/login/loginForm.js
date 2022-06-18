import {useState, useContext, useEffect} from "react"
import {AuthContext} from "../../context"
import style from "./loginForm.module.css"
import {Link, Navigate} from "react-router-dom"
import Input from "../forms/input"
import Button from "../forms/button"

import {TOKEN_POST} from "../../api"
import FormField from "./formField"

export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)


    const context = useContext(AuthContext)


   
    async function Login(evt){
        evt.preventDefault()
        const res = await context.userLogin({username:username, password:password})
        if(res) setError(res.message)

        // if(res.message) console.log("errorororo", res.message)
        // if(res.error) setError(res.error.message)
        
    }
    return(
        <>
        <form onSubmit={Login}>
            <FormField title="Login">
            
                <Input title={"Usuario:"} value={username} setValue={setUsername}/>
                <Input title={"Senha:"} value={password} setValue={setPassword}/>
                {error && <span className="errorMessage">{error}</span>}

                <Button disabled={context.isLoadingUser}>{context.isLoadingUser?"carregando...":"login"}</Button>  
                <Link to="perdeu" className={style.passwordLost}>Perdeu a senha?</Link>
            </FormField>
        </form>
        <form>
            
            <FormField title="Cadastre-se">
                <p>Ainda mão possui uma conta? Cadastre-se no site.</p>

                <Link to="criar">
                    <Button>Cadastro</Button>
                </Link>
            </FormField>
        </form>
        
        

        </>
    )
}