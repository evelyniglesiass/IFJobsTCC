import '../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const DicasFormacoesComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='container-modal modal-dica-editar'>
            <button onClick={openModal} className='button-modal-open'>💡</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <h2>Dicas para suas formações</h2>
                <hr/>
                <p>- Seja sincero, porém cuide para não ser narcisista ou meritocrático</p>
                <p>- Escreva sobre suas formações tendo o tipo de vaga que você quer em mente</p>
                <p>- Se venda com equilíbrio, não exagere e não se diminua</p>
                <p>- Conecte sua formação com seus almejos profissionais, mostrando como você pretende construir sua carreira</p>
                <p>- Seja simples e direto</p>
                <p>- Você pode focar aqui se não possui experiência profissional</p>
                <p>- Não esqueca de preencher os dados da sua instituição e o período</p>
                <button onClick={closeModal} className='button-modal'>Fechar</button>
            </Modal>
        </div>
    )
}

export default DicasFormacoesComponent