import {useParams} from "react-router-dom"
import Feed from "../feed/feed"



export default function Profile(){
    const {user} = useParams()
    console.log(user, "-----------")
    return(
        <section className="container">
            <Feed id={user}/>

        </section>
    )
}