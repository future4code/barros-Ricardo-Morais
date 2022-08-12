import React from "react";
import {useNavigate} from "react-router-dom"


function HomePage() {

    const navigate = useNavigate();


    return (
        <>
            <h1> HomePage</h1>
            <button onClick={()=>navigate("/login")}>Login</button>
            <button onClick={()=>navigate("/list")}>Viagens</button>

        </>
    )
}


export default  HomePage;