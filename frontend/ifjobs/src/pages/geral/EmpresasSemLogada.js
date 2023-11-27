import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent';
import EmpresasComponent from '../../components/empresa/ui/EmpresasComponent';
import AtalhoPerfilComponent from '../../components/ui/AtalhoPerfilComponent';
import { useListarEmpresasEmp } from '../../hook/empresa/listarEmpresasEmp.hook';
import { useListarEmpresaNomeSem } from '../../hook/empresa/listarEmpresaNomeSem.hook';

// Feed com empresas cadastradas
const EmpresasSemLogada = () => {

  const [empresas, setEmpresas] = useState([])

  const { listarEmpresasEmp } = useListarEmpresasEmp();

  useEffect(() => {
    async function listar() {

      const response = await listarEmpresasEmp();
      
      setEmpresas(response) 

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

  const { listarEmpresaNomeSem } = useListarEmpresaNomeSem();

  async function onSubmit(event){
    event.preventDefault();

    if (formInput.pesquisa != " " && formInput.pesquisa != "") {
      const response = await listarEmpresaNomeSem(formInput.pesquisa);
      setEmpresas(response) 
    } else {
      const response = await listarEmpresasEmp();
      setEmpresas(response) 
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
          <article className='div-empresa'><EmpresasComponent empresas={empresas}/></article>
        </section>
    </div>
  )
}

export default EmpresasSemLogada