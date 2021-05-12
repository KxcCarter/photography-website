import React, { useEffect, useState } from 'react';
import { StyleWrapper } from './ImageGallery.styles';
import { tempPhotos } from '../../photoApi/API';

interface FakeResponse {
  data: FakeData[];
}

interface FakeData {
  description: string;
  title: string;
  url: string;
}

const Gallery: React.FC<{}> = () => {
  const [images, setImages] = useState([]);
  const getPhotos = async () => {
    try {
      const {
        data: { data },
      } = await tempPhotos.get<FakeResponse>('/');
      setImages(data);
    } catch (error) {
      throw new Error('Oh noooo ugh');
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <StyleWrapper>
      <h2>Portrait Gallery</h2>
      <div className="gallery-items">
        {images.map((item, index) => (
          <img key={index} src={item.url} alt={item.title} className="image" />
        ))}
      </div>
    </StyleWrapper>
  );
};

export default Gallery;
