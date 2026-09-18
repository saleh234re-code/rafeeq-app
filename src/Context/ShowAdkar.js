import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Adkaer from '../Adkaer.json'
export const AdkarContext =createContext([])

export default function Adkar({children}){

const [showAdkar,setshowAdkar] =useState(Adkaer.categories)
 
    return(
         <AdkarContext.Provider value={{showAdkar,setshowAdkar}}>{children}</AdkarContext.Provider>
    )
}