
import style from "./formField.module.css"

export default function FormField(props){
    return(<>
        <fieldset className={style.fieldset}>
            <legend className="title">{props.title}</legend>
            {props.children}
        </fieldset>
    </>
    )
}