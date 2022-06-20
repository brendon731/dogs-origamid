import { useEffect, useState } from "react"
import {VictoryPie, VictoryBar, VictoryChart } from "victory"
import style from "./userStatsGraph.module.css"
export default function UserStatsGraph({ data }){
    const [graph, setGraph] = useState([])
    const [total, setTotal] = useState(0)

useEffect(()=>{
    if(data.length){

        const graphData = data.map(item=>{
            return{
                x:item.title, 
                y:Number(item.acessos)
            }
        })
        setTotal(
            data.map(({ acessos })=>Number(acessos)).reduce((a, b )=> a + b)
            )
        setGraph(graphData)
    }else{
        setGraph([])
    }
},[data])
    return(
        <div className={`entering-animation ${style.graph}`}>
            <div className={style.total}>

                <p>Acessos: {total}</p>
            </div>
            <div className={style.graphItem}>

                {graph && <VictoryPie 
                data={graph}
                padding={{left:75, right:75}}
                style={{
                    data:{
                        fillOpacity:.9,
                        stroke:"#fff",
                        strokeWidth:2
                    },
                    label:{
                        fontSize:14, 
                        fill:"#333"
                    }
                }}
                innerRadius={50}
                />}
            </div>
            <div className={style.graphItem}>

            <VictoryChart padding={{left:50, right:50, top:25, bottom:25}}>
                <VictoryBar alignment="start" data={graph}></VictoryBar>
            </VictoryChart>
            </div>
        </div>
    )

}