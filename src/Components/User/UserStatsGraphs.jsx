import React from 'react';
import styles from './UserStatsGraphs.module.css';
import {VictoryPie, VictoryChart, VictoryBar} from 'victory';

const UserStatsGraphs = ({data}) => {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
      setTotal(data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b, 0));
    }, [data]);
    
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
      <div>
        <VictoryPie 
          data={[
            {
              x: 'Teste',
              y: '4',
            },
            {
              x: 'Ellie',
              y: '10',
            }
          ]} 
        />
      </div>
    </section>
  );
};

export default UserStatsGraphs;
