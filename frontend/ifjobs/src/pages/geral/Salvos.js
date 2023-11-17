import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import VagasComponent from '../../components/empresa/ui/VagasComponent'
import AtalhoPerfilComponent from '../../components/ui/AtalhoPerfilComponent';
import PesquisaComponent from '../../components/ui/PesquisaComponent';
import { useListarSalvosEstudantes } from '../../hook/estudante/listarSalvosEstudantes.hook';
import useGlobalUser from '../../context/usuario/user.context';

// Feed com vagas em que o estudante se candidatou
const Salvos = () => {

  const [vagas, setVagas] = useState([]);
  const [user] = useGlobalUser();

  const { listarSalvosEstudantes } = useListarSalvosEstudantes();

  useEffect(() => {
    async function listar() {

      console.log(user.id)
      const response = await listarSalvosEstudantes(user.id);
      
      setVagas(response) 

    }

    listar();
  }, [])

  return (
    <div className='container-pages'> 
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-vagas'>
          <article className='pesquisa-vagas'><PesquisaComponent/></article>
          <AtalhoPerfilComponent/>
          <article className='div-vaga'><VagasComponent vagas={vagas}/></article>
        </section>
    </div>
  )
}

export default Salvos