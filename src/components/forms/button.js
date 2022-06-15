import style from "./button.module.css"

export default function Button({children, disabled=false, clicked}){
    return(
        <button className={style.button} disabled={disabled}
        onClick={clicked}
        >{children}</button>
    )
}