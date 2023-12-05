import '../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para cursos
const DicasCursosComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='container-modal modal-dica-curso'>
            <button onClick={openModal} className='button-modal-open'>💡</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <h2>Dicas para seus cursos e certificados</h2>
                <hr />
                <p>- Seja sincero, porém cuide para não ser narcisista ou meritocrático</p>
                <p>- Escreva sobre seus cursos tendo o tipo de vaga que você quer em mente</p>
                <p>- Não esqueça de adicionar as datas referentes ao seu curso</p>
                <p>- Aqui você também pode adicionar seus certificados, prêmios,
                    serviços acadêmicos, filiações e papéis em comitês, sociedades e
                    conselhos editoriais de cunho científico ou profissional e atividades como supervisor ou conselheiro!</p>

                <button onClick={closeModal} className='button-modal'>Fechar</button>
            </Modal>
        </div>
    )
}

export default DicasCursosComponent