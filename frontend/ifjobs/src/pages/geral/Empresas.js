import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent';
import EmpresasComponent from '../../components/empresa/ui/EmpresasComponent';
import { useListarEmpresasEst } from '../../hook/empresa/listarEmpresasEst.hook';
import { useListarEmpresaNome } from '../../hook/empresa/listarEmpresaNome.hook';

// Feed com empresas cadastradas
const Empresas = () => {

  const [empresas, setEmpresas] = useState([])

  const { listarEmpresasEst } = useListarEmpresasEst();

  useEffect(() => {
    async function listar() {

      const response = await listarEmpresasEst();
      
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

  const { listarEmpresaNome } = useListarEmpresaNome();

  async function onSubmit(event){
    event.preventDefault();

    if (formInput.pesquisa != " " && formInput.pesquisa != "") {
      const response = await listarEmpresaNome(formInput.pesquisa);
      setEmpresas(response) 
    } else {
      const response = await listarEmpresasEst();
      setEmpresas(response) 
    }
  }

  return (
    <div className='container-pages'>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-empresas'>
          <article className='pesquisa-empresas'>
              <nav class="navbar bg-body-tertiary">
                  <section className="container-fluid">
                      <form className="d-flex" role="search" onSubmit={onSubmit}>
                        <input nameName='pesquisa' class="form-control me-2 caixa-pesquisa" type="search" placeholder="Pesquisar..." aria-label="Search" onChange={handleChange}/>
                        <button className="btn btn-outline-dark botao-pesquisa" type="submit">Pesquisar</button>
                      </form>
                  </section>
              </nav> 
          </article>

          <article className='div-empresa'>
            <EmpresasComponent empresas={empresas}/>
          </article>
          
        </section>
    </div>
  )
}

export default Empresas