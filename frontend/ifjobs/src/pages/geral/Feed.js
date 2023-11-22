import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import VagasComponent from '../../components/empresa/ui/VagasComponent';
import AtalhoPerfilComponent from '../../components/ui/AtalhoPerfilComponent';
import { useListarVagas } from '../../hook/vagas/listarVagas.hook';
import { useListarVagaTitulo } from '../../hook/vagas/listarVagaTitulo.hook';

// Feed com vagas publicadas
const Feed = () => {

  const [vagas, setVagas] = useState([])

  const { listarVagas } = useListarVagas();

  useEffect(() => {
    async function listar() {

      const response = await listarVagas();
      
      setVagas(response) 

    }

    listar();
  }, [])

  const [formInput, setFormInput] = useState({
    pesquisa: ''
  })

  function handleChange(event){
    const { name, value } = event.target;

    setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
  }

  const { listarVagaTitulo } = useListarVagaTitulo();

  async function onSubmit(event){
    event.preventDefault();

    const response = await listarVagaTitulo(formInput.pesquisa);
    console.log(response)
    console.log(formInput.pesquisa)
    
    setVagas(response) 
    
  }

  return (
    <div className='container-pages'>

      <nav className='header'><HeaderComponent /></nav>

      <section className='container-vagas'>

        <article className='pesquisa-vagas'>

          <nav class="navbar bg-body-tertiary">

            <section class="container-fluid">

                <form class="d-flex" role="search" onSubmit={onSubmit}>

                  <input name='pesquisa' class="form-control me-2 caixa-pesquisa" type="search" placeholder="Pesquisar..." aria-label="Search" onChange={handleChange}/>
                  <button class="btn btn-outline-dark botao-pesquisa" type="submit">Pesquisar</button>

                </form>

            </section>

          </nav>  

        </article>
        
        <AtalhoPerfilComponent />

        <article className='div-vaga'><VagasComponent vagas={vagas}/></article>

      </section>

    </div>
  )
}

export default Feed