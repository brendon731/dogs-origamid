import {useEffect} from "react"
import { PHOTOS_GET } from "../../api"
import FeedPhotosItem from "./feedPhotosItem"
import style from "./feedPhotos.module.css"
import useFecth from "../helper/useFetch"
import Loading from "../helper/loading"

export default function FeedPhotos({ setInfinite, page, id, openModal }){
    const {data:photos, error, isLoading, request} = useFecth()
    
    async function fetchPhotos(){
        const total = 6
        const {url, options} = PHOTOS_GET({page:page, total:total, user:id})
        let {sucess, json} = await request(url, options)
        
        if(sucess && json.length < total){
            setInfinite(false)
        }
    }

    useEffect(()=>{
        fetchPhotos()
    },[])
    
    if(isLoading) return <Loading/>

    if(error) return <h1>{error}</h1>
    
    return(
        <>
        {photos && 
        
            <ul className={`entering-animation ${style.photosContainer}`}>
                {photos.map(photo=><FeedPhotosItem openModal={()=>{openModal(photo.id)}} photo={photo} key={photo.id}/>)}
            </ul>}
            
       </> 
       )
    
    
    
}