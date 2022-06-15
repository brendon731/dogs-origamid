import {useContext, useState} from "react"
import { COMMENT_POST } from "../../api";
import { AuthContext } from "../../context";
import useFecth from "../helper/useFetch";
import FormComment from "./formComment";
import style from "./photoComments.module.css"

export default function PhotoComments({photoInfo}){
    const {isLogged} = useContext(AuthContext)
    console.log(photoInfo.photo.id)

    const[commentsList, setCommentsList] = useState(()=>photoInfo.comments)

    return(<>
            <ul className={style.photoComments}>
                {commentsList.map(e=><li key={e.comment_ID}>
                    <b>{e.comment_author}: </b> 
                    <span>{e.comment_content}</span>
                </li>)}
            </ul>

            {isLogged && <FormComment id={photoInfo.photo.id} comments={commentsList} setComments={setCommentsList}/>}

            </>
    )
}