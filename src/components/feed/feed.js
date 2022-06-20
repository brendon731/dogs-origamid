import { useState, useEffect } from "react"
import FeedPhotos from "./feedPhotos"
import Modal from "./modal"

export default function Feed({ id }){
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [curPhoto, setCurPhoto] = useState()
    const [pages, setPages] = useState([1])
    const [infinite, setInfinite] = useState(true)
   
    useEffect(()=>{
        let wait = false

        function infiniteScroll(){

            if(infinite){
                const scroll = window.scrollY
                const height = document.body.offsetHeight - window.innerHeight
                if(scroll > height * 0.75 && !wait){
                    setPages((pages)=>[...pages, pages.length + 1])
                    wait = true
                    setTimeout(()=>{
                        wait = false
                    }, 500)
                }
            }

        }
        window.addEventListener("wheel", infiniteScroll)
        window.addEventListener("scroll", infiniteScroll)

        return ()=>{

            window.removeEventListener("wheel", infiniteScroll)
            window.removeEventListener("scroll", infiniteScroll)

        }

    },[infinite])

    function closeModal(evt){
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
        <>
            {isModalOpen && <Modal closeModal={closeModal} photoId={curPhoto}/>}
            {pages.map(page=>
                <FeedPhotos 
                setInfinite={setInfinite}
                key={page}
                page={page} 
                openModal={openModal} 
                id={id}/>
            )}
            {!infinite && <p style={{margin:"auto", padding:"1em 0", opacity:".5"}}>Não existe mais postagens</p>}
        </>
    )
    
}