import style from "./modal.module.css"
import {useState, useContext} from "react"
import {PHOTO_GET} from "../../api"
import { useEffect } from "react"
import useFecth from "../helper/useFetch"
import {AuthContext} from "../../context"
import FormComment from "./formComment"
import PhotoComments from "./photoComments"

export default function Modal({closeModal, photoId}){
    // const [loading, setLoading] = useState(true)
    const {data:photoInfo, error, isLoading, request} = useFecth()
    const context = useContext(AuthContext)
    console.log(photoInfo)
    useEffect(()=>{
        const {url, options} = PHOTO_GET(photoId)
        request(url, options)
    },[photoId])


    if(isLoading) return <h1>loading</h1>
    if(error) return <span className="error">{error}</span>
    return(
        <>{photoInfo &&
        <div className={style.modal} id="modal" onClick={closeModal}>

            <div className={style.modalContent}>
                <div className={style.imgWrap}>
                    <img src={photoInfo.photo.src}/>
                </div>
                <div className={style.informations}>
                    <div className={style.photoContentAuthor}>
                        {context.username === photoInfo.photo.author?
                        <button>Deletar</button>
                        :<a href="#"className={style.author}>@{photoInfo.photo.author}</a>
                    }
                        <span className={style.views}>{photoInfo.photo.acessos}</span>
                    </div>
                    <a href="#" className="title" style={{display:"block"}}>{photoInfo.photo.title}</a>
                    <ul className={style.info}>
                        <li>{photoInfo.photo.peso} kg</li>
                        <li >{photoInfo.photo.idade} anos</li>
                    </ul>
                </div>

                <PhotoComments photoInfo={photoInfo}/>
                
            </div>
        </div>
            }
        </>

    )
}