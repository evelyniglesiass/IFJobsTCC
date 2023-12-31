import '../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const DicasObjetivoComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='container-modal modal-dica-cur'>
            <button onClick={openModal} className='button-modal-open'>💡</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <h2>Dicas para seu objetivo</h2>
                <hr />
                <p>- Seja sincero, porém cuide para não ser narcisista ou meritocrático</p>
                <p>- Escreva seu objetivo tendo o tipo de vaga que você quer em mente</p>
                <p>- Se venda com equilíbrio, não exagere e não se diminua</p>
                <p>- Descreva seus almejos profissionais</p>
                <p>- Conte como você pretende construir sua carreira na área</p>
                <p>- Seja simples e direto</p>
                <p>- Se você não possui experiência profissional, foque em sua área acadêmica e
                    atividades curriculares e extracurriculares vinculadas ao cargo ou atividades
                    que apresente tarefas similares ao que está sendo pedido pela empresa ou áre que você almeja</p>
                <button onClick={closeModal} className='button-modal'>Fechar</button>
            </Modal>
        </div>
    )
}

export default DicasObjetivoComponent