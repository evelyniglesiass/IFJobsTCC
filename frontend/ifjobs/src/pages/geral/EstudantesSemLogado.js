import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components 
import PesquisaComponent from '../../components/ui/PesquisaComponent';
import AtalhoPerfilComponent from '../../components/ui/AtalhoPerfilComponent';
import EstudantesComponent from '../../components/estudante/EstudantesComponent';
import HeaderComponent from '../../components/ui/HeaderComponent';
import { useListarEstudantesEst } from '../../hook/estudante/listarEstudantesEst.hook';

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

  return (
    <div className='container-pages'>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-empresas'>
          <article className='pesquisa-empresas'><PesquisaComponent/></article>
          <AtalhoPerfilComponent/>
          <article className='div-empesa'><EstudantesComponent estudantes={estudantes}/></article>
        </section>
    </div>
  )
}

export default EstudantesSemLogado