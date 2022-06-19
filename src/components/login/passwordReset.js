import { useEffect, useState } from "react";
import { PASSWORD_RESET } from "../../api";
import Button from "../forms/button";
import Input from "../forms/input";
import useFecth from "../helper/useFetch";
import FormField from "./formField";
import {useNavigate} from "react-router-dom"
import Head from "../helper/head";

export default function PasswordReset(){
    const [login, setLogin] = useState()
    const [key, setKey] = useState()
    const [password, setPassword] = useState("")
    const {data, error, isLoading, request} = useFecth()
    const navigate = useNavigate()
    useEffect(()=>{
        let params = new URLSearchParams(window.location.search)
        let key = params.get("key")
        let login = params.get("login")

        console.log(key, login)
        if(key) setKey(key)
        if(login) setLogin(login)

    },[])
    async function handleSubmit(evt){
        evt.preventDefault()
        const {url, options} = PASSWORD_RESET({
            login:login, key:key, password:password
        })
        let {sucess} = await request(url, options)
        if(sucess) navigate("/login")

    }
    return(<>
    <Head title="Resetar a senha"/>
        <form onSubmit={handleSubmit}>
            <FormField title="Resetar a senha">
                <Input title="Nova senha" value={password} setValue={setPassword}/>
                {isLoading?
                    <Button disabled={true}>carregando...</Button>
                :
                    <Button>Resetar</Button>
                }
                {error && <span className="errorMessage">{error}</span>}
            </FormField>
        </form>
    </>
    )
}