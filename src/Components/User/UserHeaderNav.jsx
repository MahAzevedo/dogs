import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
//import AdicionarFoto from '../../Assets/adicionar.svg?react'; svg quebrado
import AdicionarFoto from '../../Assets/usuario.svg?react';  //foto adicionar tá quebrada
import Sair from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  // const navigate = useNavigate(); //excluir
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  function handleLogout() {
    userLogout();
    navigate('/login');
 };

  return (
    <>
    {mobile && (
      <button 
        aria-label="Menu" 
        className={styles.mobileButton}
        onClick={() => setMobileMenu(!mobileMenu)}>
      </button>
    )}
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos /> 
          {mobile && 'Minhas Fotos'}
        </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>

{/* // coloquei no import a img de usuario, adicionar.svg tá quebrada */}
      <NavLink to="/conta/postar"> 
        <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
      </NavLink>

      <button onClick={handleLogout}>  {/* '' -->> userLogout*/}
        <Sair />
          {mobile && 'Sair'}
      </button>
    </nav>
    </>
  );
};


export default UserHeaderNav;
