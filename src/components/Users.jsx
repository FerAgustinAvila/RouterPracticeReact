import React ,{ useState, useEffect } from 'react'
import axios from 'axios'
import {
    Link
} from 'react-router-dom'

const Users = () => {

    const[ users, setUsers ] = useState([])

    const getUsers = async()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = await res.data

        setUsers( users )
    }

    useEffect(() => {      
        getUsers()  
    }, [])

    return (
        <div>
            <h2> Lista de usuarios </h2>
            <hr />
            {
                users.map( (user) => (
                    <div key={ user.id }>
                        <Link to={`/users/${ user.id }`}>
                            <b> 
                                Nombre: 
                            </b> { user.name } - 
                            <b> Apellido:  
                            </b> { user.username }
                        </Link>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}

export default Users
