import { createContext } from "react"
import axios from "axios";
import { useState,useEffect } from "react";
export const QuranContexted=createContext([])

export default function Qurancontext({children}){                  
const[ShowSurah,setSurah]=useState([])
const[selectedSurah,setedsurah]=useState(null)

 useEffect(()=>{
    const getSurah =async()=>{
const response = await axios.get(` https://api.alquran.cloud/v1/surah` ) 
setSurah(response.data.data)
    }
    getSurah()
 },[])
  const getOneSurah = async (number) => {
   
      const response = await axios.get(
        `https://api.alquran.cloud/v1/surah/${number}`
      );

      setedsurah(response.data.data);
   
  };
 return(
   
    
    <QuranContexted.Provider value={{ShowSurah,setSurah,selectedSurah,setedsurah,getOneSurah }}>
{children}
    </QuranContexted.Provider>
    
    
    
    
)

}

