import {useEffect, useState} from "react"
// import { PHOTO_GET } from "../../api"
import FeedPhotos from "./feedPhotos"
import Modal from "./modal"

export default function Feed(){
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [curPhoto, setCurPhoto] = useState()

    function closeModal(evt){
        //console.log(evt.target.id)
        const {id} = evt.target

        if(id === "modal"){
            setIsModalOpen(false)
        }

    }
    function openModal(id){
        setCurPhoto(id)
        setIsModalOpen(true)
    }
    
    return(
        <div>
            {isModalOpen && <Modal closeModal={closeModal} photoId={curPhoto}/>}
            <FeedPhotos openModal={openModal} />
        </div>
    )
    
}