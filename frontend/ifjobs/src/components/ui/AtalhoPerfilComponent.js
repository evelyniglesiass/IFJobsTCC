import React, { useEffect, useState } from 'react'
import '../../App.scss';
import {Link} from "react-router-dom"

// Component de atalho para o perfil logado
const AtalhoPerfilComponent = ({user}) => {

    const [userTag, setUserTag] = useState([]);

    useEffect(() =>{

        setUserTag([]);

        setUserTag(() => ([
            
            <button className='button-atalho-perfil'>
                <Link className='link-atalho-perfil' to={"/perfil/user"}>
                    {user.nome != null ? user.nome.slice(0, 2).toUpperCase() : "👤"}
                </Link>        
            </button>

        ]))

    }, [user])

    return (
        {userTag}
    )
}

export default AtalhoPerfilComponent