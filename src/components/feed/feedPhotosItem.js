import style from "./feedPhotosItem.module.css"
import Image from "../helper/image"
export default function FeedPhotosItem({photo, openModal}){
    
    return(<>
        <li className={style.eachItem} onClick={openModal}>
            <Image alt={photo.title} src={photo.src}/>
            <span className={style.view}>{photo.acessos}</span>
        </li>
         
    </>
    )
        
}