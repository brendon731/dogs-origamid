import {useState} from "react"



const types = {
    email:{
        regex:/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/,
        message:"Preencha um email válido"
    },
    password:{
        regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
        message:
        `A senha precisa conter pelo menos 1 caractere maiúsculo, 1 minúsculo e 1 dígito. 
        No minimo 8 caracteres`
    }
}
export default function useForm(type){
    const [value, setValue] = useState("")
    const [error, setError] = useState(null)

    function validate(value){

        if(type === false) return true
        if(value.length === 0){
            setError("Preencha um valor")
            return false

        }else if(types[type] && !types[type].regex.test(value)){

            setError(types[type].message)
            return false
        }  else{
            setError(null)
            return true
        }
    }
    function onChange(evt){
        setError(false)
        setValue(evt.target.value)

    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value)

    }
}
