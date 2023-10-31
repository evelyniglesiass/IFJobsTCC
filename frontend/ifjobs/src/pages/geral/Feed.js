import React from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent'
import VagasComponent from '../../components/empresa/VagasComponent';
import PesquisaComponent from '../../components/ui/PesquisaComponent';
import AtalhoPerfilComponent from '../../components/ui/AtalhoPerfilComponent';

//import useGlobalUsuario from '../context/usuario/usuario.context';

// Feed com vagas publicadas
const Feed = () => {

  //const [usuario] = useGlobalUsuario();
  //console.log(usuario);

  return (
    <div className='container-pages'>                  
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-vagas'>
          <article className='pesquisa-vagas'><PesquisaComponent/></article>
          <AtalhoPerfilComponent/>
          <article className='div-vaga'><VagasComponent/></article>
        </section>
    </div>
  )
}

export default Feed