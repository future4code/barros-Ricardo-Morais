
import { HomeText, MainHomeButtons, MainHomeButtonsContainer, MainHomePageContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate()

    const goToTripsPage = () =>{
        navigate('/trips/list')
    }
    return (
        <MainHomePageContainer>
            <HomeText>VAMOS VIAJAR? </HomeText>
            <MainHomeButtonsContainer>
                <MainHomeButtons onClick={goToTripsPage}
                >DESTINOS</MainHomeButtons>
            </MainHomeButtonsContainer>
        </MainHomePageContainer>        
    )
};