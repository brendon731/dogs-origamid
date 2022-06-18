import {useState} from "react"
import styles from "./image.module.css"

export default function Image({...props}){
    const [skeleton, setSkeleton] = useState(true)
    function handleLoading({target}){
        
        setSkeleton(false)
        target.style.opacity = 1;

    }
    return(
        <div className={styles.wrapper}>
            {skeleton && <div className={styles.skeleton}></div>}
            <img onLoad={handleLoading} className={styles.img} {...props}/>
        </div>
    )
}