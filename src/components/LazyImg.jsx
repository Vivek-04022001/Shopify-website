import React, { useState } from "react";

const LazyImg = ({ imageUrl, imageUrlsmall }) => {
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
      />
    </div>
  );
};

export default LazyImg;
