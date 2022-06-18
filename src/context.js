import React, {createContext, useEffect, useState} from "react"
import { BASE_URL } from "./baseurl"
import {GET_USER, TOKEN_POST} from "./api"
import {useNavigate} from "react-router-dom"
import useFecth from "./components/helper/useFetch"
export const AuthContext = createContext()

        
export function ContextProvider({children}){
    const [isLogged, setIsLogged] = useState(null)
    const [data, setData] = useState("")
    const [isLoadingUser, setIsLoadingUser] = useState(true)

    const [token, setToken] = useState()
    const navigate = useNavigate()

    async function getUSer(token){
        console.log("aqui--------")
        const {url, options} = GET_USER(token)
        try{
            let res = await fetch(url, options)
            if(!res.ok) throw new Error("erro ao pegar o usuario")
            let data = await res.json()

            setData(data)
            setIsLogged(true)

        }catch(err){
            setIsLogged(false)
        }
        finally{
            setIsLoadingUser(false) 

        }

    }
    async function userLogin({username, password}){
        const {url, options} = TOKEN_POST({username:username, password:password})
        
        setIsLoadingUser(true)
        
        try{
            let res = await fetch(url, options)
            if(!res.ok) throw new Error("usuario ou senha invalidos")
            let resjson = await res.json()
            let token = resjson.token

            localStorage.setItem("token", token)

            getUSer(token)

        }catch(err){
            setIsLoadingUser(false)
            setIsLogged(false)
            return err
        }
        
    }
    
    function userLogout(evt){
        evt.preventDefault()
       
        if(window.confirm("deseja sair?")){
            setIsLogged(false)
            localStorage.removeItem("token")
            navigate("login")
        }
    }
    
    useEffect(()=>{
        const tokenFromLocal = localStorage.getItem("token")
        if(tokenFromLocal){
            getUSer(tokenFromLocal)
        }else{
            setIsLoadingUser(false)
            setIsLogged(false)

        }
    },[])

    

    return(
        <AuthContext.Provider 
         value={{userLogin, token, setToken, isLogged, setIsLogged, data, userLogout, isLoadingUser, setIsLoadingUser}}>
            {children}
        </AuthContext.Provider>
        )
}