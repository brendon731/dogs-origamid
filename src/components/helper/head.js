import { useEffect } from "react"



export default function Head(props){
    useEffect(()=>{
        document.title = `${props.title} | Dogs`

        document
        .querySelector("meta[name='description']")
        .setAttribute("content", props.description || " ")
    },[])

    return <></>
}