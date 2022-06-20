import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context";
import UserHeader from "./userHeader"
import Feed from "../feed/feed"

import UserPhotoPost from "./userPhotoPost";
import ErrorPage from "../helper/errorPage";
import UserStats from "./userStats";

export default function User(){
   const {data} = useContext(AuthContext)

   return(
      <>

      <UserHeader/>
      <section className="container ">
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