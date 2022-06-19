import {useEffect} from "react"
import Loading from "../helper/loading"
import useFecth from "../helper/useFetch"
import ModalContent from "./modalContent"
import { PHOTO_GET } from "../../api"
import { useParams } from "react-router-dom"
import Head from "../helper/head"
export default function Photo(){
    const {id} = useParams()
    const {data:photoInfo, error, isLoading, request} = useFecth()
    useEffect(()=>{
        const {url, options} = PHOTO_GET(id)
        request(url, options)
    },[id])

    return(<>
    {photoInfo && <Head title={photoInfo.photo.title}/>}
        <section className="container">
        {isLoading?
            <Loading/>
        :
            photoInfo && <ModalContent photoInfo={photoInfo} single={true}/>
        }
        </section>
        </>
    )
}