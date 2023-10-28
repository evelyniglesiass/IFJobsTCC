import '../../../App.scss';
import {Link} from "react-router-dom"

const EditarVagaButtonComponent = () => {

    return (
        <button className='button-editar'>
            <Link className='link-editar' to={"/editar/vaga"}>Editar</Link>        
        </button>
    )
}

export default EditarVagaButtonComponent