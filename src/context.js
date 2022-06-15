import React, {createContext, useEffect, useState} from "react"
import { BASE_URL } from "./baseurl"
import {GET_USER, TOKEN_POST} from "./api"
import {useNavigate} from "react-router-dom"
export const AuthContext = createContext()

        
export function ContextProvider({children}){
    const [isLogged, setIsLogged] = useState(null)
    const [username, setUsername] = useState("")
    const [isLoadingUser, setIsLoadingUser] = useState(true)

    const [token, setToken] = useState()
    const navigate = useNavigate()

    async function getUSer(token){
        const {url, options} = GET_USER(token)
        console.log(token, "-----token-- getuser----")
        try{
            let res = await fetch(url, options)
            if(!res.ok) throw new Error("erro ao pegar o usuario")
            let data = await res.json()

            setUsername(data.username)
            console.log(data)
            setIsLogged(true)
            //navigate("/conta")

        }catch(err){
            console.log(err)
            setIsLogged(false)
        }
        finally{
            setIsLoadingUser(false) 

        }

    }
    async function userLogin({username, password}){
        console.log(username, password)
        const {url, options} = TOKEN_POST({username:username, password:password})
        try{
            let res = await fetch(url, options)
            if(!res.ok) throw new Error("usuario ou senha invalidos")
            let resjson = await res.json()
            let token = resjson.token
        //console.log(resjson, "-----token-- userlogin----")

            localStorage.setItem("token", token)

            getUSer(token)

        }catch(err){
            setIsLoadingUser(false)
            setIsLogged(false)

        }
        
    }
    
    function userLogout(){
       
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
         value={{userLogin, token, setToken, isLogged, setIsLogged, username, setUsername, userLogout, isLoadingUser, setIsLoadingUser}}>
            {children}
        </AuthContext.Provider>
        )
}