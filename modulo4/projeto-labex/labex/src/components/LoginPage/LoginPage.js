import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate()

    return (
        <>
            <h1>LoginPage</h1>
            <button onClick={()=>navigate("/AdiminHome")}>Pagina do Adinistrador</button>
            <button onClick={()=>navigate("/CreateTrip")}>Criar Viagem</button>
            <button onClick={()=>navigate("/TripDetails")}>Detalhes da Viagem</button>

        </>
    )
}


export default LoginPage;