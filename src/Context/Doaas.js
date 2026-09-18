import { createContext } from "react";
import { useState } from "react";
 import Doaa from '../DoaaJson.json'
export const DoaaContext =createContext([])

export default function Doaas({children}){

const [showDoaa,setshowDoaa] =useState(Doaa)
 
    return(
         <DoaaContext.Provider value={{showDoaa,setshowDoaa}}>{children}</DoaaContext.Provider>
    )
}