import '../../../App.scss';
import {Link} from "react-router-dom"

// Botão editar de Empresa
const EditarEmpresaButtonComponent = () => {
    return (
        <button className='button-editar'>
            <Link className='link-editar' to={"/perfil/empresa/editar"}>Editar</Link>        
        </button>
    )
}

export default EditarEmpresaButtonComponent