import {useEffect, useState} from "react"
import { PHOTOS_GET } from "../../api"
import FeedPhotosItem from "./feedPhotosItem"
import style from "./feedPhotos.module.css"
import useFecth from "../helper/useFetch"
export default function FeedPhotos({openModal}){
    // const [photos, setPhotos] = useState(null)
    const {data:photos, error, isLoading, request} = useFecth()

    async function fetchPhotos(){
        const {url, options} = PHOTOS_GET({page:1, total:6, user:0})
        request(url, options)

    }

    useEffect(()=>{
        fetchPhotos()
    },[])
    
    if(isLoading) return <h1>carregando...</h1>
    if(error) return <h1>{error}</h1>
    
    return(
        <>
        {photos && 
            <ul className={style.PhotosContainer}>
                {photos.map(photo=><FeedPhotosItem openModal={()=>{openModal(photo.id)}} photo={photo} key={photo.id}/>)}
            </ul>}
            
       </> 
       )
    
    
    
}