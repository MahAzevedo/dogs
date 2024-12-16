import React from 'react';
import styles from './PhotoContent.module.css';

const PhotoContent = ({data}) => {
    const {photo, comments}

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={data} alt="" />
      </div>
    </div>
  );
};

export default PhotoContent;
