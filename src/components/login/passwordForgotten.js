import { useEffect, useState } from "react"
import { PASSWORD_LOST } from "../../api"
import Button from "../forms/button"
import Input from "../forms/input"
import useFecth from "../helper/useFetch"
import FormField from "./formField"

export default function Forgot(){
    const {data, error, isLoading, request} = useFecth()
    const [email, setEmail] = useState("")
    async function handleSubmit(evt){
        evt.preventDefault()

        console.log("entoru")

        let {url, options} = PASSWORD_LOST({
            login:email,
            url:window.location.href.replace("perdeu", "resetar")
        })
        let res = await request(url, options)
        console.log(res, error)

    }

    return(<>
        {data? <p className="sucessMessage">{data}</p>:
        <form onSubmit={handleSubmit}>

            <FormField title="Perdeu a senha?">
                <Input title="email / Usuario" value={email} setValue={setEmail}/>
                
                {error && <p className="errorMessage">{error}</p>}
                
                {isLoading?
                    <Button disabled={true}>Enviando...</Button>
                    :
                    <Button>Enviar Email</Button>
                }
            </FormField>
        </form>}
        </>)
}