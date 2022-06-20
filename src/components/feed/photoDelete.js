import { PHOTO_DELETE } from "../../api"
import useFecth from "../helper/useFetch"
import style from "./photoDelete.module.css"
import {useNavigate} from "react-router-dom"
export default function PhotoDelete({ id }){
    const {isLoading, request} = useFecth()
    const navigate = useNavigate()
    async function handleDelete(){

        if(window.confirm("dejesa exclui mesmo?")){

            const {url, options} = PHOTO_DELETE(id)
            const sucess = await request(url, options)

            if(sucess){
                // console.log(window.location)
                let path = window.location.pathname
                if(path === "/conta"){

                    window.location.reload()
                }else{
                    navigate("/conta")
                }

                //navigate("/conta")
            } 
                
        }
    }

    return(
        <>
        {isLoading?
        <button disabled>carregando ...</button>:
        <button onClick={handleDelete} className={style.deleteButton}>Deletar</button>

    }
        </>
    )
}