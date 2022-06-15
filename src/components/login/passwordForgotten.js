import Button from "../forms/button"
import Input from "../forms/input"
import FormField from "./formField"

export default function Forgot(){

    return(
        <form>

            <FormField title="Perdeu a senha?">
                <Input title="email / Usuario"/>
                <Button>Enviar Email</Button>
            </FormField>
        </form>
    )

}