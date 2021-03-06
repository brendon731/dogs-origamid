import {useState} from "react"
import {ReactComponent as Enviar} from "../../Assets/enviar.svg"
import style from "./formComment.module.css"
import {COMMENT_POST} from "../../api"
import useFetch from "../helper/useFetch" 

export default function CommentForm({id, setComments, single}){
    const {error, isLoading, request} = useFetch()

    const [comment, setComment] = useState("")

    async function postComment(evt){
        evt.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment})
        let {sucess, json} = await request(url, options)
        
        if(sucess){
            setComment("")
            setComments((comments)=>[...comments, json])
        }

    }
    
    return(
        <form className={`${style.postComent} ${single?style.singlePageForm:""}`} onSubmit={postComment}>
            <textarea placeholder="coment..." value={comment} onChange={evt=> setComment(evt.target.value)}/>
            <button className={isLoading?style.animated:style.submitButton}><Enviar/></button>
            {error && <span className="errorMessage">{error}</span>}

        </form>
    )
}