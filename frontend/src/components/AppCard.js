// AppCard.js
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

const AppCard = ({ product, onClick }) => {
  const handleMouseEnter = () => {
    // add future mouse enter logic here
  };

  const handleMouseLeave = () => {
    // add future mouse leave logic here
  }

  return (
    <div className="card-container" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
      <Card variant="outlined" onClick={() => onClick(product)}>
        <CardContent>
          <Typography variant="h5" component="div">
            {product.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppCard;
