import React, { useEffect, useState } from 'react'
import '../../App.scss';
import EstudantesComponent from '../../components/estudante/ui/EstudantesComponent';
import HeaderComponent from '../../components/ui/HeaderComponent';
import { useListarEstudantesEmp } from '../../hook/estudante/listarEstudantesEmp.hook';
import { useListarEstudanteNome } from '../../hook/estudante/listarEstudanteNome.hook';

// Feed com estudantes cadastrados
const Estudantes = () => {

  const [estudantes, setEstudantes] = useState([])

  const { listarEstudantesEmp } = useListarEstudantesEmp();

  useEffect(() => {
    async function listar() {

      const response = await listarEstudantesEmp();

      setEstudantes(response)

    }

    listar();
  }, [])

  const [formInput, setFormInput] = useState({
    pesquisa: ' '
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setFormInput((oldFormInput) => ({ ...oldFormInput, [name]: value }));
  }

  const { listarEstudanteNome } = useListarEstudanteNome();

  async function onSubmit(event) {
    event.preventDefault();

    if (formInput.pesquisa != " " && formInput.pesquisa != "") {
      const response = await listarEstudanteNome(formInput.pesquisa);
      setEstudantes(response)
    } else {
      const response = await listarEstudantesEmp();
      setEstudantes(response)
    }
  }

  return (
    <div className='container-pages'>
      <nav className='header'><HeaderComponent /></nav>
      <section className='container-empresas'>
        <article className='pesquisa-empresas'>
          <nav class="navbar bg-body-tertiary">
            <section class="container-fluid">
              <form class="d-flex" role="search" onSubmit={onSubmit}>
                <input name='pesquisa' class="form-control me-2 caixa-pesquisa" type="search" placeholder="Pesquisar..." aria-label="Search" onChange={handleChange} />
                <button class="btn btn-outline-dark botao-pesquisa" type="submit">Pesquisar</button>
              </form>
            </section>
          </nav>
        </article>
        {/* <AtalhoPerfilComponent/> */}
        <article className='div-empesa'><EstudantesComponent estudantes={estudantes} /></article>
      </section>
    </div>
  )
}

export default Estudantes