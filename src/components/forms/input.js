import style from "./input.module.css"

export default function Input({title, value, setValue, ...props}){
    return(
        <label className={style.label}>
            {title}
            <input type="text" value={value} onChange={evt=>setValue(evt.target.value)} {...props}/>
        </label>
    )
}