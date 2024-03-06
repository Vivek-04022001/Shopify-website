import React, { useState } from "react";

const LazyImg = ({ imageUrl, imageUrlsmall, className, onClick }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageError = () => {
    setIsImageLoaded(false);
  };
  const ContainerStyle = {
    backgroundImage: `url(${imageUrlsmall})`,
  };

  return (
    <div
      className={`blur-load ${isImageLoaded && "loaded"} `}
      style={ContainerStyle}
    >
      <img
        src={imageUrl}
        alt={imageUrl}
        loading="lazy"
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={className}
        onClick={onClick}

      />
    </div>
  );
};

LazyImg.defaultProps = {
  className: '',
  onclick:()=>{},
  
  
};
export default LazyImg;
