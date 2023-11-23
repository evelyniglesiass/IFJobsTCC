import '../../App.scss';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component de de dicas para objetivo
const DicasExperienciaComponent = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='container-modal modal-dica-exp'>
            <button onClick={openModal} className='button-modal-open'>💡</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <h2>Dicas para suas experiências</h2>
                <hr/>
                <p>- Comece pela mais recente e caso esteja na mesma empresa há vários anos destaque 
                    suas conquistas durante esse período, mostrando sua evolução</p>
                <p>- Além disso, se sua experiência profissional é extensa, foque apenas nos últimos dez 
                    anos e naquelas experiências mais marcantes e relevantes</p>
                <p>- Evite o excesso de informações, sendo simples e direto</p>
                <p>- Seja sincero, porém cuide para não ser narcisista ou meritocrático</p>
                <p>- Escreva suas experiências tendo o tipo de vaga que você quer em mente</p>
                <p>- Se venda com equilíbrio, não exagere e não se diminua</p>
                <p>- Se você não possui experiência profissional, foque em sua área acadêmica e 
                    atividades curriculares, voluntárias e extracurriculares vinculadas ao cargo ou atividades 
                    que apresente tarefas similares ao que está sendo pedido pela empresa ou áre que você almeja</p>
                <button onClick={closeModal} className='button-modal'>Fechar</button>
            </Modal>
        </div>
    )
}

export default DicasExperienciaComponent