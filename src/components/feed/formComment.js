import {useState} from "react"
import {ReactComponent as Enviar} from "../../Assets/enviar.svg"
import style from "./formComment.module.css"
import {COMMENT_POST} from "../../api"
import useFetch from "../helper/useFetch" 

export default function CommentForm({id, setComments}){
    console.log(id)
    const {data, error, isLoading, request} = useFetch()

    const [comment, setComment] = useState("")


    async function postComment(evt){
        evt.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment})
        let {sucess, json} = await request(url, options)
        console.log(sucess, json, "reeeeeeees")
        if(sucess){
            console.log(json, "--------")
            setComments((comments)=>[...comments, json])
        }

    }
    
    return(
        <form className={style.postComent} onSubmit={postComment}>
            <textarea placeholder="coment..." value={comment} onChange={evt=> setComment(evt.target.value)}/>
            <button className={isLoading?style.animated:null}><Enviar/></button>
            {error && <span className="errorMessage">{error}</span>}

        </form>
    )
}