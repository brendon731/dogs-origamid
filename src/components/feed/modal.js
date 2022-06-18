import style from "./modal.module.css"
import {PHOTO_GET} from "../../api"
import { useEffect } from "react"
import useFecth from "../helper/useFetch"
import ModalContent from "./modalContent"
import Loading from "../helper/loading"
export default function Modal({closeModal, photoId}){

    const {data:photoInfo, error, isLoading, request} = useFecth()

    useEffect(()=>{
        const {url, options} = PHOTO_GET(photoId)
        request(url, options)
    },[photoId])


    
    if(error) return <span className="error">{error}</span>
    return(
        <>{
            <div className={style.modal} id="modal" onClick={closeModal}>
                {isLoading?
                <Loading/>
                :
                photoInfo && <ModalContent photoInfo={photoInfo}/>
                }
             
            </div>
            }
        </>

    )
}