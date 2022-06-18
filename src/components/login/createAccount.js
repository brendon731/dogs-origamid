import {useState, useContext} from "react"
import { AuthContext } from "../../context"
import style from "./loginForm.module.css"
import FormField from "./formField"
import Input from "../forms/input"
import Button from "../forms/button"

import {CREATE_ACCOUNT} from "../../api"

export default function Create(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const context = useContext(AuthContext)

    async function createUser(evt){
        evt.preventDefault()
        setIsLoading(true)
            console.log(username, email, password)
        try{
            const {url, options} = CREATE_ACCOUNT({username:username, password:password, email:email})

            let res = await fetch(url, options)

            if(!res.ok){
                let resjson = await res.json()
                throw new Error(resjson.message)
            }else{
                context.userLogin({username:username, password:password})
            }


        }catch(err){
            setErrorMessage(err.message)
            console.log(err.message, "--------")
        }
        finally{
            setIsLoading(false)
        }

    }
    return(
        <form onSubmit={createUser}>
            <FormField title="Cadastre-se">
                <Input title="Usuario:" value={username} setValue={setUsername}/>
                <Input title="Email:" value={email} setValue={setEmail}/>
                <Input title="Password:" value={password} setValue={setPassword}/>
                {errorMessage && <span className="errorMessage">{errorMessage}</span>}
                <Button clicked={createUser} disabled={isLoading}>Criar</Button>
            </FormField>

        </form>
    )
}