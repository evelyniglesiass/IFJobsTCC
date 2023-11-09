import React from 'react'
import '../../App.scss';
import Logo from '../../imagens/logoBrancoLegendaFundo.png'
import { Link } from "react-router-dom"
import { useLogout } from '../../hook/logout/logout.hook';

// Component de cabeçalho
const HeaderComponent = () => {

  const {fazerLogout} = useLogout();

  async function onClick(event){
    event.preventDefault();

    await fazerLogout();
  }

  return (
    <nav className='container-links'>
        <img src={Logo} alt='Logo' className='logo-navbar' />
        <div className='link'><Link to={"/perfil/estudante"}>Perfil</Link><br /></div>
        <div className='link'><Link to={"/feed"}>Vagas</Link><br /></div>
        <div className='link'><Link to={"/empresas"}>Empresas</Link><br /></div>
        <div className='link'><Link to={"/salvos"}>Salvos</Link><br /></div>

        <button onClick={onClick} className='botao btn'><Link to={"/"}>Sair</Link><br/></button>
    </nav>
  )
}

export default HeaderComponent