import { useEffect } from "react";
import {useContext, useState} from "react"
import { COMMENT_POST } from "../../api";
import { AuthContext } from "../../context";
import useFecth from "../helper/useFetch";
import FormComment from "./formComment";
import style from "./photoComments.module.css"

export default function PhotoComments({photoInfo, single}){
    const {isLogged} = useContext(AuthContext)
    
    const[commentsList, setCommentsList] = useState(()=>photoInfo.comments)
   
    return(<>
            <ul className={`${style.photoComments} ${single?style.photoCommentsSinglePage:""}`}>
                {commentsList.map(e=><li key={e.comment_ID}>
                    <b>{e.comment_author}: </b> 
                    <span>{e.comment_content}</span>
                </li>)}
            </ul>

            {isLogged && <FormComment single={single} id={photoInfo.photo.id} comments={commentsList} setComments={setCommentsList}/>}
                
            </>
    )
}