import '../../../App.scss';
import {Link} from "react-router-dom"

const EditarCurriculoComponent = () => {

    return (
        <button className='button-editar'>
            <Link className='link-editar' to={"/editar/estudante"}>Editar</Link>        
        </button>
    )
}

export default EditarCurriculoComponent