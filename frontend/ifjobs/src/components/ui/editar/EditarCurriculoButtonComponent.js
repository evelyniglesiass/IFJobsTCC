import '../../../App.scss';
import {Link} from "react-router-dom"

// Botão editar de estudante
const EditarCurriculoButtonComponent = () => {
    return (
        <button className='button-editar'>
            <Link className='link-editar' to={"/perfil/estudante/editar"}>Editar</Link>        
        </button>
    )
}

export default EditarCurriculoButtonComponent