import React, { useEffect, useState } from 'react'
import '../../App.scss';
import {Link} from "react-router-dom"
import useGlobalUser from '../../context/usuario/user.context';

// Component de atalho para o perfil logado
const AtalhoPerfilComponent = () => {

    const [userTag, setUserTag] = useState([]);
    const [user] = useGlobalUser();

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