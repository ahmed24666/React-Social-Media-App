import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()
export const AuthContextProvidor =({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login  =()=>{
        setCurrentUser({id:1, name:"Ahmed Osama", ProfilePic:"https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"})
    }

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(currentUser))
    }, [currentUser])
    return(

        <AuthContext.Provider value={{currentUser, login}}>{children}</AuthContext.Provider>
    )
}