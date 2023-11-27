import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components 
import PesquisaComponent from '../../components/ui/PesquisaComponent';
import AtalhoPerfilComponent from '../../components/ui/AtalhoPerfilComponent';
import EstudantesComponent from '../../components/estudante/ui/EstudantesComponent';
import HeaderComponent from '../../components/ui/HeaderComponent';
import { useListarEstudantesEst } from '../../hook/estudante/listarEstudantesEst.hook';
import { useListarEstudanteNomeSem } from '../../hook/estudante/listarEstudanteNomeSem.hook';

// Feed com empresas cadastradas
const EstudantesSemLogado = () => {

  const [estudantes, setEstudantes] = useState([])

  const { listarEstudantesEst } = useListarEstudantesEst();

  useEffect(() => {
    async function listar() {

      const response = await listarEstudantesEst();
      
      setEstudantes(response) 

    }

    listar();
  }, [])

  const [formInput, setFormInput] = useState({
    pesquisa: ' '
  })

  function handleChange(event){
    const { name, value } = event.target;

    setFormInput((oldFormInput) => ({...oldFormInput, [name]:value}));
  }

  const { listarEstudanteNomeSem } = useListarEstudanteNomeSem();

  async function onSubmit(event){
    event.preventDefault();

    if (formInput.pesquisa != " " && formInput.pesquisa != "") {
      const estResp = await listarEstudanteNomeSem(formInput.pesquisa);
      setEstudantes(estResp) 
    } else {
      const response = await listarEstudantesEst();
      setEstudantes(response) 
    }

  }

  return (
    <div className='container-pages'>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-empresas'>
          <article className='pesquisa-empresas'>
            <nav class="navbar bg-body-tertiary">
                <section class="container-fluid">
                    <form class="d-flex" role="search" onSubmit={onSubmit}>
                      <input name='pesquisa' class="form-control me-2 caixa-pesquisa" type="search" placeholder="Pesquisar..." aria-label="Search" onChange={handleChange}/>
                      <button class="btn btn-outline-dark botao-pesquisa" type="submit">Pesquisar</button>
                    </form>
                </section>
            </nav>  
          </article>
          {/* <AtalhoPerfilComponent/> */}
          <article className='div-empesa'><EstudantesComponent estudantes={estudantes}/></article>
        </section>
    </div>
  )
}

export default EstudantesSemLogado