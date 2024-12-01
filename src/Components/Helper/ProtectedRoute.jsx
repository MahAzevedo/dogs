import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    
  const { login } = React.useContext(UserContext);
    if(login === true) {
      return children;
    } else if(login === false) {
      return <Navigate to="/login" />
    } else {
      return <></>
  }
};

export default ProtectedRoute;

// essa forma não envia para login, primeiro ela confere se já está logado, é a forma mais recente do React



// -----------//------

// ou dessa outra forma abaixo: 
// Primeiro ele mostra a parte de login, depois puxa as informações, vê que o usuário está realmente credenciado, e aí, faz a navegação para /conta


// const ProtectedRoute = ({children}) => { 
//   const { login } = React.useContext(UserContext);
//     return login ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;