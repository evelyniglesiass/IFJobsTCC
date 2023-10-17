import React from 'react'
import '../App.scss';
import { Link } from "react-router-dom"

const HeaderComponent = () => {
  return (
    <nav className='container-links'>
        <img src='.../imagens/logo.png' alt='Logo' className='logo-navbar'/>
        <div className='link'><Link to={"/perfil/estudante"}>Perfil</Link><br /></div>
        <div className='link'><Link to={"/feed"}>Vagas</Link><br /></div>
        <div className='link'><Link to={"/empresas"}>Empresas</Link><br /></div>
        <div className='link'><Link to={"/salvos"}>Salvos</Link><br /></div>
    </nav>
  )
}

export default HeaderComponent