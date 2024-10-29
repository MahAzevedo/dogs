import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
// import { ReactComponent as Dogs } from '../Assets/bird.avif';
// import Dog from './img/dog.svg?react';
// import dog from '../Assets/dogs.png?react';
import dog from '../img/dog.png?react';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`styles.nav container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">o svg de cara de cachorro tá quebrado ||| 
        {/* <Dogs /> */}
        </Link>
        <Link className={styles.login} to="/login">        Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
