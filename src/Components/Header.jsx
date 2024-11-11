import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
// import { ReactComponent as Dogs } from '../Assets/bird.avif';
// import Dog from './img/dogs.svg?react';
// import dog from '../img/dog.png?react';
import { UserContext } from '../UserContext';
// import dogFooter from '../img/dogs.footer?react';


const Header = () => {
  const {data} = React.useContext(UserContext);

  return (
    <header className={styles.header}>

      {/* <img className='logoDog' src={dog} alt="Logo cachorro feliz" />  */}
      {/* esse img é um teste */}


      <nav className={`styles.nav container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
        {/* o svg de cara de cachorro tá quebrado |||  */}
        {/* <Dogs /> */}
        </Link>
        {data && data.email}
        <Link className={styles.login} to="/login">   
        Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
