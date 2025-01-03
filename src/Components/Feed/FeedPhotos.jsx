import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({page, user, setModalPhoto}) => {

  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total: 3, user });
      const {json} = await request(url, options); {/*response, json*/}
    }
    fetchPhotos();
  }, [request, user, page]);

  if(error) return <Error error={error} />
  if(loading) return <Loading /> 
  if(data) 
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map((photo) => (
        <FeedPhotosItem 
         key={photo.id} 
         photo={photo} 
         setModalPhoto={setModalPhoto} 
      />
      ))}
    </ul>
  );
  else return null;
};

export default FeedPhotos;
