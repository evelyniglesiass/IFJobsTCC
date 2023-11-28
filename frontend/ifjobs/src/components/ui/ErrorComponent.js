import '../../App.scss';
import { Link, redirect } from 'react-router-dom';
import { useState } from 'react';
import { useLogin } from '../../hook/login/login.hook';
import CadastrarUsuarioComponent from './CadastrarUsuarioComponent';
import CadastrarExperienciaComponent from '../estudante/cadastro/CadastrarExperienciaComponent';
import CadastrarFormacaoComponent from '../estudante/cadastro/CadastrarFormacaoComponent';
import CadastrarCursoComponent from '../estudante/cadastro/CadastrarCursoComponent';
import EmpresaEditarComponent from '../empresa/editar/EmpresaEditarComponent';


// Component de login
const ErrorComponent = () => {

  return (
    <div className='container-error'>
        <article className='titulo-error'>
            <h1>404</h1>
        </article>
        <h5 className='sub-error'>A página que você está procurando não foi encontrada.</h5>
        <button className='botao btn'><Link to={"/"}>Voltar para tela de login</Link></button>
    </div> 
  )
}

export default ErrorComponent