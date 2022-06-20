import {useContext} from "react"
import PhotoComments from "./photoComments"
import PhotoDelete from "./photoDelete"
import Image from "../helper/image"
import {Link} from "react-router-dom"
import {AuthContext} from "../../context"

import style from "./modalContent.module.css"

export default function ModalContent({photoInfo, single}){
    const context = useContext(AuthContext)
    return(
        <>
        <div className={single?style.singlePageContent:style.modalContent}>
            <div className={style.imgWrap}>
                <Image src={photoInfo.photo.src} alt={photoInfo.photo.title}/>
            </div>
            <div className={style.informations}>

                <div className={style.photoContentAuthor}>
                    {context.data.username === photoInfo.photo.author?

                    <PhotoDelete id={photoInfo.photo.id}/>

                    :<Link to={`/perfil/${photoInfo.photo.author}`} className={style.author}>@{photoInfo.photo.author}</Link>
                    }

                    <span className={style.views}>{photoInfo.photo.acessos}</span>
                </div>
                <Link to={`/foto/${photoInfo.photo.id}`} className="title" style={{display:"block"}}>{photoInfo.photo.title}</Link>
                
                <ul className={style.info}>
                    <li>{photoInfo.photo.peso} kg</li>
                    <li >{photoInfo.photo.idade} anos</li>
                </ul>
            </div>

            <PhotoComments photoInfo={photoInfo} single={single}/>
            
        </div>
        </>
    )
}