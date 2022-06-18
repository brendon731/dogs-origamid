import {ReactComponent as Loading} from "../../Assets/carregando.svg"
import style from "./modalLoading.module.css"
export default function ModalLoading(){
    return(
    <div className={style.loadContainer}>
        <Loading/>
    </div>)
}