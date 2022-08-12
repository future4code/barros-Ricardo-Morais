import React from "react";
import {useNavigate} from "react-router-dom"


function ListTripPage() {

    const navigate = useNavigate();

    return (
        <>
            <h1>ListTripPage</h1>
            <button onClick={()=>navigate("/Application")}>Inscreva-se</button>

        </>
    )
}


export default ListTripPage;