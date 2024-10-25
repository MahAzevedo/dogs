import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
// import { ReactComponent as Dogs } from '../Assets/dogs.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className="container">
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">o svg de cara de cachorro tá quebrado ||| 
        {/* <Dogs /> */}
        </Link>
        <Link className={styles.login} to="/login">        Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
