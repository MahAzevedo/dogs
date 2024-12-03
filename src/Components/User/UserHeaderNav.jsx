import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
//import AdicionarFoto from '../../Assets/adicionar.svg?react'; svg quebrado
import AdicionarFoto from '../../Assets/usuario.svg?react';  //foto adicionar tá quebrada
import Sair from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  // const [mobile, setMobile] = React.useContext(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta">
        <MinhasFotos /> 
          {/* {mobile && 'Minhas Fotos'} */}
        </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
          {/* {mobile && 'Estatísticas'} */}
        </NavLink>

{/* // coloquei no import a img de usuario, adicionar.svg tá quebrada */}
      <NavLink to="/conta/postar"> 
        <AdicionarFoto />
          {/* {mobile && 'Adicionar Foto'} */}
      </NavLink>

      <button onClick={userLogout}>  {/* '' -->> userLogout*/}
        <Sair />
          {/* {mobile && 'Sair'} */}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
