import React from 'react';
import {
  useMediaQuery,
  Typography,
 
} from '@mui/material';
import Carousel from './Carousel.jsx';

const App = () => {
 
  const images = ["https://picsum.photos/1510/600?random=1", "https://picsum.photos/1510/600?random=2", "https://picsum.photos/1510/600?random=3"];

  return (
    < >
      <div>
        <Typography variant='h3' textAlign={'center'}> Carousel</Typography>
        <Carousel images={images}  />
      </div>
    </>
  );
};

export default App;
