import {useState} from "react"


export default function useFecth(){
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    async function request(url, options){
        setIsLoading(true)
        let sucess = true
        let json;
        try{
            let res = await fetch(url, options)
            json = await res.json()

            if(!res.ok) throw new Error(json.message)
            setData(json)

        }catch(err){
            sucess = false
            setError(err.message)

        }finally{
            setIsLoading(false)

        }
    return {sucess, json}        
        
    }
    return {
        data, error, isLoading, request
    }
}