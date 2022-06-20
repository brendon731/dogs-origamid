import { useContext} from "react"
import { AuthContext } from "../../context"
import FormField from "./formField"
import Input from "../forms/input"
import Button from "../forms/button"

import {CREATE_ACCOUNT} from "../../api"
import Head from "../helper/head"
import useForm from "../helper/useForm"
import useFecth from "../helper/useFetch"

export default function Create(){
    const username = useForm()
    const email = useForm("email")
    const password = useForm("password")

    const {error, isLoading, request} = useFecth()
    const context = useContext(AuthContext)

    async function createUser(evt){
        evt.preventDefault()
        const canSubmit = username.validate() && email.validate() && password.validate()
        if(canSubmit){
            const {url, options} = CREATE_ACCOUNT({username:username.value, password:password.value, email:email.value})
            
            let {sucess} = await request(url, options)
            
            if(sucess){
                context.userLogin({username:username.value, password:password.value})
                
            }
        }
    }

    return(<>
    <Head title="Crie sua conta"/>
        <form onSubmit={createUser}>
            <FormField title="Cadastre-se">
                <Input title="Usuario:" {...username}/>

                <Input title="Email:" type="email" {...email} />

                <Input title="Password:" type="password" {...password}/>

                {error && <span className="errorMessage">{error}</span>}
                {isLoading?
                    <Button disabled={true}>Carregando ...</Button>
                :
                    <Button clicked={createUser} disabled={isLoading}>Criar</Button>
                }
            </FormField>

        </form>
    </>
    )
}