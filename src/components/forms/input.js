import style from "./input.module.css"

export default function Input({title, value, type,  onChange, error, onBlur}){
    return(
        <label className={style.label}>
            {title}
            <input type={type || "text"} value={value} onChange={onChange} onBlur={onBlur}/>
            {error && <span className="errorMessage">{error}</span>}
        </label>
    )
}