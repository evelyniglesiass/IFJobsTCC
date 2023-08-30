import React from 'react'
import './PesquisaComponent.scss';

const PesquisaComponent = () => {
  return (
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2 caixa-pesquisa" type="search" placeholder="Pesquisar..." aria-label="Search"/>
              <button class="btn btn-outline-dark botao-pesquisa" type="submit">Pesquisar</button>
            </form>
        </div>
    </nav>  
  )
}

export default PesquisaComponent