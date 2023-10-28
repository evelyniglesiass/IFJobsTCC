import '../../../App.scss';
import {Link} from "react-router-dom"

const EditarCurriculoButtonComponent = () => {

    return (
        <button className='button-editar'>
            <Link className='link-editar' to={"/editar/estudante"}>Editar</Link>        
        </button>
    )
}

export default EditarCurriculoButtonComponent