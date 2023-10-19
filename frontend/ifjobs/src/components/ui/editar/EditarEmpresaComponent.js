import '../../../App.scss';
import {Link} from "react-router-dom"

const EditarEmpresaComponent = () => {

    return (
        <button className='button-editar'>
            <Link className='link-editar' to={"/editar/empresa"}>Editar</Link>        
        </button>
    )
}

export default EditarEmpresaComponent