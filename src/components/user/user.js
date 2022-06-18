import { Route, Routes, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import UserHeader from "./userHeader"
import Feed from "../feed/feed"

import UserPhotoPost from "./userPhotoPost";
import ErrorPage from "../helper/errorPage";

export default function User(){
   const location = useLocation()
   const {data} = useContext(AuthContext)
   console.log(data, "---data----")
   useEffect(()=>{
      const {pathname} = location
        switch(pathname){
            case "/conta/estatisticas":
                document.title = "Estatísticas | Dogs"
                break
            case "/conta/postar":
                document.title = "Poste sua foto | Dogs"
                break
            default:
                document.title = "Minha Conta | Dogs"
                break
        }
      
   },[location])

   return(
      <>

      <UserHeader/>
      <section className="container">
         <Routes>
            <Route path="/" element={<Feed id={data.id}/>}/>
            <Route path="postar" element={<UserPhotoPost/>}/>
            <Route path="estatisticas" element={<h1>estatisticas</h1>}/>
            <Route path="*" element={<ErrorPage/>}/>

         </Routes>
      </section>
      </>
   )
}