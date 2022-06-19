
import {useState} from "react"
import Input from "../forms/input"
import Button from "../forms/button"
import style from "./userPhotoPost.module.css"
import {PHOTO_POST} from "../../api"
import {useNavigate} from "react-router-dom"
import useFecth from "../helper/useFetch"
import Head from "../helper/head"
import useForm from '../helper/useForm'
export default function UserPhotoPost(){
    const navigate = useNavigate()
    const [img, setImg] = useState({})
    const name = useForm()
    const peso = useForm()
    const idade = useForm()

    const {error, isLoading, request} = useFecth()

    function handlePreview(evt){
        let file = evt.target.files[0]
        setImg({
            raw:file,
            preview:URL.createObjectURL(file)

        })
    }
    async function fetchPostPhoto(formData){
        const token = localStorage.getItem("token")
        const {url, options} = PHOTO_POST(formData, token)
        let {sucess} = await request(url, options)
        if(sucess) return navigate("/conta")
    }

   
    function handleImg(evt){
        evt.preventDefault()
        const formData = new FormData()
        formData.append("img", img.raw)
        formData.append("nome", name.value)
        formData.append("idade", idade.value)
        formData.append("peso", peso.value)

        fetchPostPhoto(formData)

    }

    return(<>
    <div className={style.photoPostContent} >
        <Head title="Poste uma foto"/>
        <form onSubmit={handleImg}>
            <Input title="Nome" {...name}/>
            <Input title="Peso" {...peso} type="number"/>
            <Input title="Idade" {...idade} type="number"/>
            <input type="file" value="" onChange={handlePreview}/> 
            {error && <span className="errorMessage">{error}</span>}
            {isLoading?<Button disabled={true}>Carregando...</Button>:<Button>Enviar</Button>} 
        </form>
        {img.preview?
            <div 
                style={{backgroundImage:`url(${img.preview})`}}
                className={style.photoPreview}
                >

        </div>:null}
    </div>
    </>

    )
}