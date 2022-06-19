import { Route, Routes, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import UserHeader from "./userHeader"
import Feed from "../feed/feed"

import UserPhotoPost from "./userPhotoPost";
import ErrorPage from "../helper/errorPage";
import UserStats from "./userStats";

export default function User(){
   const location = useLocation()
   const {data} = useContext(AuthContext)


   return(
      <>

      <UserHeader/>
      <section className="container">
         <Routes>
            <Route path="/" element={<Feed id={data.id}/>}/>
            <Route path="postar" element={<UserPhotoPost/>}/>
            <Route path="estatisticas" element={<UserStats/>}/>
            <Route path="*" element={<ErrorPage/>}/>

         </Routes>
      </section>
      </>
   )
}