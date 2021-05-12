import axios from 'axios';

// Local Photos
import photo1 from '../images/image1.jpg';
import photo2 from '../images/image2.jpg';
import photo3 from '../images/image3.jpg';
import photo4 from '../images/image4.jpg';
import photo5 from '../images/image5.jpg';

import v1 from '../images/vic-1.jpg';

import wide from '../images/wide.jpg';

import b4 from '../images/BETHWEB/beth-4.jpg';
import b2 from '../images/BETHWEB/beth-2.jpg';
import b3 from '../images/BETHWEB/beth-3.jpg';

// export const IMAGES = [
//   { img: photo5, altText: 'Sophistication' },
//   { img: photo1, altText: 'Style' },
//   { img: photo2, altText: 'Class' },
//   { img: photo3, altText: 'Elegance' },
//   { img: photo4, altText: 'Intensity' },
// ];

export const IMAGES = [
  { img: b4, altText: 'Sophistication' },
  { img: b2, altText: 'Style' },
  { img: b3, altText: 'Class' },
  { img: v1, altText: 'Swagger' },
];

export const tempPhotos = axios.create({
  baseURL: 'https://fakerapi.it/api/v1/images',
  params: {
    _type: 'people',
    _quantity: 24,
  },
});
