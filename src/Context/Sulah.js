
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SulahContext=createContext([])

export default function  Sulah({children}){
const [  getSurah,setSurah ]  =useState([])
useEffect(()=>{
const ShowSurah= async()=>{
    const response = await axios.get("https://api.aladhan.com/v1/timingsByCity?city=Qena&country=Egypt&method=5")
    setSurah(response.data.data )
}

ShowSurah()

},[])




    return(
<SulahContext.Provider value={{getSurah,setSurah}}>
{children}

</SulahContext.Provider>
    )
}