import React, {useEffect, useState} from 'react'
import axios from 'axios'

const useCapturarNome=(BASE_URL)=>{
    const [nomeUsuarios, setNomeUsuarios] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}users`).then(response =>{
          setNomeUsuarios(response.data)
        }).catch(error =>{
          console.log(error)
        })
      }, [])

    return nomeUsuarios;
}
export default useCapturarNome;