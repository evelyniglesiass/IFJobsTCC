import React from 'react'
import './HeaderComponent.scss'
import { Link } from "react-router-dom"

const HeaderComponent = () => {
  return (
    <div className='container-links'>
        <div className='link'><Link to={"/"}>Perfil</Link><br /></div>
        <div className='link'><Link to={"/feed"}>Vagas</Link><br /></div>
        <div className='link'><Link to={"/empresas"}>Empresas</Link><br /></div>
        <div className='link'><Link to={"/"}>Salvos</Link><br /></div>
    </div>
  )
}

export default HeaderComponent