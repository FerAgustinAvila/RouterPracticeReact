import React ,{ useState, useEffect } from 'react'
import axios from 'axios'
import {
    useParams
} from 'react-router-dom'

const User = ( props ) => {

    const[ user, setUser ] = useState([])
    const { id } = useParams()

    const getUser = async()=>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${ id }`)
        const user = await res.data

        setUser( user )
    }

    const prev = (e) => {
        e.preventDefault()
    }

    const { name, username, email, phone, website } = user

    useEffect(() => {      
        getUser()  
    }, [])

    return (
        <div>
            <h4> Bienvenido { name } </h4>
            <p> 
                <b> 
                    Nombre: 
                </b> { name } - <b> 
                     Apellido:  
                </b> { username } 
            </p>
            <p>
                <b>
                    Email: 
                </b> { email }
            </p> 
            <p>
                <b>
                    Celular: 
                </b> { phone }
            </p> 
            <p>
                <b>
                    Sitio Web: 
                </b> <a onClick={ prev } href="#">{ website }
                </a>
            </p>
        </div>
    )
}

export default User
