import {useState} from "react"

export default function useFetch(){
    const [data ,setData ] = useState(null)
    const [error ,setError ] = useState(null)
    const [loading ,setLoading ] = useState(false)
    const getData = useCallback(async(url, options)=>{

        try{ 
            let response = await fetch()
            let json = await res.json()

            if(!response.ok) throw new Error(json.message)

        }catch(erro){
            json = null
            setError(erro.message)
        }
        finally{
            setData(json)
            setLoading(false)

            return{response, json}
        }
    },[])
    
    return{
        data, error, loading, getData
    }

}