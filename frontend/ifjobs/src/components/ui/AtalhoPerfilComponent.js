import '.../App.scss';
import {Link} from "react-router-dom"

const AtalhoPerfilComponent = () => {

    return (
        <button className='button-atalho-perfil'>
            <Link className='link-atalho-perfil' to={"/perfil/estudante"}>NC</Link>        
        </button>
    )
}

export default AtalhoPerfilComponent