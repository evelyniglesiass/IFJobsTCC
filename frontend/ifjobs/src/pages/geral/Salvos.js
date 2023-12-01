import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import VagasComponent from '../../components/empresa/ui/VagasComponent'
import { useListarSalvosEstudantes } from '../../hook/estudante/listarSalvosEstudantes.hook';
import useGlobalUser from '../../context/usuario/user.context';
import { useListarVagaTitulo } from '../../hook/vagas/listarVagaTitulo.hook';

// Feed com vagas em que o estudante se candidatou
const Salvos = () => {

  const [vagas, setVagas] = useState([]);
  const [user] = useGlobalUser();

  const { listarSalvosEstudantes } = useListarSalvosEstudantes();

  useEffect(() => {
    async function listar() {

      const response = await listarSalvosEstudantes(user.id);
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
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-vagas'>
          {/* <article className='pesquisa-vagas'>
            <nav class="navbar bg-body-tertiary">
                <section class="container-fluid">
                    <form class="d-flex" role="search" onSubmit={onSubmit}>
                      <input name='pesquisa' class="form-control me-2 caixa-pesquisa" type="search" placeholder="Pesquisar..." aria-label="Search" onChange={handleChange}/>
                      <button class="btn btn-outline-dark botao-pesquisa" type="submit">Pesquisar</button>
                    </form>
                </section>
            </nav>  
          </article> */}
          {/* <AtalhoPerfilComponent/> */}
          <article className='div-vaga'><VagasComponent vagas={vagas} acao={" "}/></article>
        </section>
    </div>
  )
}

export default Salvos