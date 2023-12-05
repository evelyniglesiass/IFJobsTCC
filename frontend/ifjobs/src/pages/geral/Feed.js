import React, { useEffect, useState } from 'react'
import '../../App.scss';
import HeaderComponent from '../../components/ui/HeaderComponent'
import VagasComponent from '../../components/empresa/ui/VagasComponent';
import { useListarVagas } from '../../hook/vagas/listarVagas.hook';
import { useListarVagaTitulo } from '../../hook/vagas/listarVagaTitulo.hook';
import useGlobalUser from '../../context/usuario/user.context';

// Feed com vagas publicadas
const Feed = () => {

  const [vagas, setVagas] = useState([])

  const [user] = useGlobalUser();

  const { listarVagas } = useListarVagas();

  useEffect(() => {
    async function listar() {

      const response = await listarVagas();

      setVagas(response)

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

  const { listarVagaTitulo } = useListarVagaTitulo();

  async function onSubmit(event) {
    event.preventDefault();

    if (formInput.pesquisa != " " && formInput.pesquisa != "") {
      const response = await listarVagaTitulo(formInput.pesquisa);
      setVagas(response)
    } else {
      const response = await listarVagas();
      setVagas(response)
    }

  }

  return (
    <div className='container-pages'>

      <nav className='header'><HeaderComponent /></nav>

      <section className='container-vagas'>

        <article className='pesquisa-vagas'>

          <nav class="navbar bg-body-tertiary">

            <section class="container-fluid">

              <form class="d-flex" role="search" onSubmit={onSubmit}>

                <input name='pesquisa' class="form-control me-2 caixa-pesquisa" type="search" placeholder="Pesquisar..." aria-label="Search" onChange={handleChange} />
                <button class="btn btn-outline-dark botao-pesquisa" type="submit">Pesquisar</button>

              </form>

            </section>

          </nav>

        </article>

        <article className='div-vaga'>
          <VagasComponent vagas={vagas} />
        </article>

      </section>

    </div>
  )
}

export default Feed