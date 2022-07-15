import styled from "styled-components";

export const Login=styled.div`
    margin-top:20px;
    width: 40vw;
    border-radius: 5vw;
    background-color: orange;
    text-align: center;
    padding-bottom:40px;
    h1{
        margin:10px;
        color: white;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        label{
            color: white;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
        }
        input{
            margin: 10px;
            border-radius: 15px;
            font-size: 20px;
            padding: 5px 15px;
            width: 30vw;
        }
        select{
            border-radius: 5vw;
        }
    }
`
export const Frase=styled.h1`
    color: red;
`
export const ButtonProximo=styled.button`
    text-transform: uppercase;
    font-weight: bold;
    font-size: large;
    margin-top: 10px;
    padding: 5px 80px;
    border-radius: 5vw;
    :hover{
        background-color: lightsteelblue ;
        color: white;
        border: 3px solid lightcyan;
        box-shadow: 1px 1px 10px;
    }
`