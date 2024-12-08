import React from 'react';
import styles from './UserPhotoPost.module.css';

const UserPhotoPost = () => {
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}></form>
    </section>
  );
};

export default UserPhotoPost;
