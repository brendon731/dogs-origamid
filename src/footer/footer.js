import {ReactComponent as Dogs} from "./../Assets/dogs.svg"
import style from "./footer.module.css"
export default function Footer(){
    return(
        <footer className={style.footer}>
            <Dogs/>
            <p>Dogs. Alguns direitos reservados</p>
        </footer>
    )
}