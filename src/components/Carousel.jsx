import { useCallback, useState } from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <>
      <div className="w-full px-4 md:w-1/2">
        <div className="carousel w-full ">
          <div className="carousel-item relative w-full">
            <img
              src={images[currentImageIndex]}
              className="w-full "
              loading="lazy"
            />

            {/* <ImageMagnifier imgUrl={images[currentImageIndex]} /> */}

            {images.length > 1 && (
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  onClick={() =>
                    handleImageClick(
                      currentImageIndex === 0
                        ? images.length - 1
                        : currentImageIndex - 1
                    )
                  }
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  onClick={() =>
                    handleImageClick(
                      currentImageIndex === images.length - 1
                        ? 0
                        : currentImageIndex + 1
                    )
                  }
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            )}
          </div>
        </div>
        {images.length > 1 && (
          <div className="minimap flex justify-center space-x-2 mt-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={
                  index === currentImageIndex
                    ? "w-16 h-16 border-2 border-blue-500"
                    : "w-16 h-16"
                }
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Carousel;
