
import {useState, useEffect} from "react"
import Input from "../forms/input"
import Button from "../forms/button"
import style from "./userPhotoPost.module.css"
import {PHOTO_POST} from "../../api"
import {useNavigate} from "react-router-dom"
import useFecth from "../helper/useFetch"
export default function UserPhotoPost(){
    const navigate = useNavigate()
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState(null)
    const [name, setName] = useState("albert")
    const [idade, setIdade] = useState("25")
    const [peso, setPeso] = useState("85")
    const [photo, setPhoto] = useState("")
    const [preview, setPreview] = useState("")
    const [img, setImg] = useState({})

    const {data, error, isLoading, request} = useFecth()

  

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
        let sucess = await request(url, options)
        if(sucess) return navigate("/")
    }

   
    function handleImg(evt){
        evt.preventDefault()
        // setIsLoading(true)
        const formData = new FormData()
        formData.append("img", img.raw)
        formData.append("nome", name)
        formData.append("idade", idade)
        formData.append("peso", peso)

        fetchPostPhoto(formData)

    }

    return(<>
    <div className={style.photoPostContent} >
        
        <form onSubmit={handleImg}>
            <Input title="Nome" value={name} setValue={setName}/>
            <Input title="Peso" value={idade} setValue={setIdade} type="number"/>
            <Input title="Idade" value={peso} setValue={setPeso} type="number"/>
            <input type="file" value={photo} onChange={handlePreview}/> 
            {error && <span className="errorMessage">{error}</span>}
            {isLoading?<Button disabled={true}>Carregando...</Button>:<Button>Enviar</Button>} 
        </form>
        {img.preview?
        <div 
        style={{
            overflow:"hidden",
            background:`url(${img.preview}) no-repeat center`,
            backgroundSize:"cover",
            borderRadius:"1.5em"}}>

        </div>:null}
    </div>
    </>

    )
}