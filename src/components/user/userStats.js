import Head from "../helper/head";
import useFecth from "../helper/useFetch";
import {STATS_GET} from "../../api"
import { lazy, useEffect, Suspense } from "react";
import Loading from "../helper/loading";
// import UserStatsGraph from "./userStatsGraph";
const UserStatsGraph = lazy(()=>import("./userStatsGraph"))
export default function UseStats(){

    const {data, error, isLoading, request} = useFecth()

    async function getData(){
        const {url, options} = STATS_GET()
        let res = await request(url, options)
        console.log("-----data-----", data, res)
    }
    useEffect(()=>{
        getData()
    },[])

    if(isLoading) return <Loading/>
    if(error) return <p className="errorMessage">{error}</p>
    if(data)
        return(
        <Suspense fallback={<div></div>}>
            <Head title="Estatísticas"/>
            <UserStatsGraph data={data}/>
        </Suspense>)
    else return null
}