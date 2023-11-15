import '../../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const CadastrarExperienciaComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='container-modal'>
            <button onClick={openModal} className='button-modal-open'>➕</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <button onClick={closeModal} className='button-fechar'>X</button>

                <h2 className='titulo-modal'>Experiência profissional</h2>
                <hr/>
                <div className='container-cursos-exper'>
                <section className='cabecalho-cursos-exper'>
                    <h4 className='titulos-cursos-exper fonte-titulo'><input type="text" class="form-editar cadastros-curriculo" id="experiencia" placeholder="Título" /></h4>
                    <h6 className='titulos-cursos-exper fonte-corpo'><input type="text" class="form-editar cadastros-curriculo" id="empresa" placeholder="Empresa" /></h6>
                    <article>
                    <h6 className='data-inicio fonte-corpo'><input type="date" class="form-editar cadastros-curriculo" id="data-inicial"/> </h6>
                    <h6 className='data-fim fonte-corpo'><input type="date" class="form-editar cadastros-curriculo" id="data-final"/></h6>
                    </article>
                    <p className='conteudo-experiencias fonte-corpo'><textarea type="textarea" class="form-editar cadastros-curriculo" id="conteudo-experiencia" placeholder="Descrição" maxLength={250} /></p>
                </section>
                </div> 
                <button type='submit' className='button-modal'>Salvar</button>
            </Modal>
        </div>
    )
}

export default CadastrarExperienciaComponent