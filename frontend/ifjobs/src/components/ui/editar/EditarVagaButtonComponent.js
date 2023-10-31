import '../../../App.scss';
import {Link} from "react-router-dom"

// Botão editar de vaga
const EditarVagaButtonComponent = () => {

    return (
        <button className='button-editar'>
            <Link className='link-editar' to={"/vaga/editar"}>Editar</Link>        
        </button>
    )
}

export default EditarVagaButtonComponent