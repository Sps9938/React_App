import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Protected({children, autentication=true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {

        // if(authStatus == ture)
        // {
        //     navigate("/")
        // }else if(authStatus == false){
        //     navigate("/login")
        // }

        //let authValue = authStatus === treu ? true : false
        if(autentication && authStatus !== autentication){
            navigate('/login')

        } else if(!autentication && authStatus !== autentication) {
            navigate("/")
        }
        setLoader(false)
    },[authStatus, navigate, autentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}
