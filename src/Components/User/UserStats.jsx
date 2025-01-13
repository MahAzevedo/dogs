import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';

const UserStats = () => {
  const {data, error, loading, request} = useFetch();

  return (
    <div>
      <Head title="Estatísticas" />
      Estatísticas
    </div>
  );
};

export default UserStats;
