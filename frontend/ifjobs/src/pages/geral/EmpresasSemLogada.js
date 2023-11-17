import React, { useEffect, useState } from 'react'
import '../../App.scss';

// Import de Components
import HeaderComponent from '../../components/ui/HeaderComponent';
import EmpresasComponent from '../../components/empresa/ui/EmpresasComponent';
import PesquisaComponent from '../../components/ui/PesquisaComponent';
import AtalhoPerfilComponent from '../../components/ui/AtalhoPerfilComponent';
import { useListarEmpresasEmp } from '../../hook/empresa/listarEmpresasEmp.hook';

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

  return (
    <div className='container-pages'>
        <nav className='header'><HeaderComponent/></nav>
        <section className='container-empresas'>
          <article className='pesquisa-empresas'><PesquisaComponent/></article>
          <AtalhoPerfilComponent/>
          <article className='div-empresa'><EmpresasComponent empresas={empresas}/></article>
        </section>
    </div>
  )
}

export default EmpresasSemLogada