import { PASSWORD_LOST } from "../../api"
import Button from "../forms/button"
import Input from "../forms/input"
import Head from "../helper/head"
import useFecth from "../helper/useFetch"
import useForm from "../helper/useForm"
import FormField from "./formField"

export default function Forgot(){
    const {data, error, isLoading, request} = useFecth()
    const user = useForm()
    async function handleSubmit(evt){
        evt.preventDefault()


        let {url, options} = PASSWORD_LOST({
            login:user.value,
            url:window.location.href.replace("perdeu", "resetar")
        })
        await request(url, options)

    }

    return(<>
    <Head title="Esqueceu a senha"/>
        {data? <p className="sucessMessage">{data}</p>:
        <form onSubmit={handleSubmit}>

            <FormField title="Perdeu a senha?">
                <Input title="email / Usuario" {...user}/>
                
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