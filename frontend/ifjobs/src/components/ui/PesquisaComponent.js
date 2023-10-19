import React from 'react'
import '../../App.scss';

const PesquisaComponent = () => {
  return (
    <nav class="navbar bg-body-tertiary">
        <section class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2 caixa-pesquisa" type="search" placeholder="Pesquisar..." aria-label="Search"/>
              <button class="btn btn-outline-dark botao-pesquisa" type="submit">Pesquisar</button>
            </form>
        </section>
    </nav>  
  )
}

export default PesquisaComponent