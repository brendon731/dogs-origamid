import {useParams} from "react-router-dom"
import Feed from "../feed/feed"
import Head from "../helper/head"



export default function Profile(){
    const {user} = useParams()
    console.log(user, "-----------")
    return(
        <section className="container">
            <Head title={user}/>
            <Feed id={user}/>

        </section>
    )
}