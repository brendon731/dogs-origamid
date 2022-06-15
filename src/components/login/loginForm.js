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

    const [canSubmit, setCanSubmit] = useState(true)

    const context = useContext(AuthContext)

    useEffect(()=>{
        setError(false)
    },[username, password])

    async function Login(evt){
        evt.preventDefault()
        context.setIsLoadingUser(true)

        const {url, options} = TOKEN_POST({
            username:username, password:password
        })
        try{
            let res = await fetch(url, options)

            if(!res.ok) throw new Error("usuario ou senha invalidos")

            let json = await res.json()

            localStorage.setItem("token", json.token)
            context.setUsername(json.user_display_name)
            context.setIsLogged(true)

        }catch(error){

            setError(error.message)
        }
        finally{
            context.setIsLoadingUser(false)

        }
        
    }
    return(
        <>
        <form onSubmit={Login}>
            <FormField title="Login">
            
                <Input title={"Usuario:"} value={username} setValue={setUsername}/>
                <Input title={"Senha:"} value={password} setValue={setPassword}/>
                {error && <span className="errorMessage">Usuario ou senha inválido</span>}

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