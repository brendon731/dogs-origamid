import style from "./feedPhotosItem.module.css"
import {ReactComponent as Visualizacao} from "../../Assets/visualizacao.svg"
export default function FeedPhotosItem({photo, openModal}){
    
    return(<>
        <li className={style.eachItem} onClick={openModal}>
            <img src={photo.src} alt={photo.title}/>
            <span className={style.view}>{photo.acessos}</span>
        </li>
         
    </>
    )
        
}