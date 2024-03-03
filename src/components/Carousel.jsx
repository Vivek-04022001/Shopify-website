import { useCallback, useState } from "react";
import LazyImg from "./LazyImg";

const Carousel = ({ images, imagesSmall }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <>
      <div className="w-full px-4 md:w-1/2">
        <div className="carousel w-full ">
          <div className="carousel-item relative w-full">
            {images && images.length > 0 ? ( // Error handling
              <LazyImg
                imageUrl={images[currentImageIndex]}
                imageUrlSmall={imagesSmall[currentImageIndex]}
              />
            ) : (
              <div className="error-message">No images available</div> // Placeholder for error state
            )}

            {/* <ImageMagnifier imgUrl={images[currentImageIndex]} /> */}

            {images &&
              images.length > 1 && ( // Error handling
                <div
                  className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                  role="navigation" // ARIA role for accessibility
                  aria-label="Carousel Navigation"
                >
                  <button
                    onClick={() =>
                      handleImageClick(
                        currentImageIndex === 0
                          ? images.length - 1
                          : currentImageIndex - 1
                      )
                    }
                    className="btn btn-circle"
                    aria-label="Previous Image"
                  >
                    ❮
                  </button>
                  <button
                    onClick={() =>
                      handleImageClick(
                        currentImageIndex === images.length - 1
                          ? 0
                          : currentImageIndex + 1
                      )
                    }
                    className="btn btn-circle"
                    aria-label="Next Image"
                  >
                    ❯
                  </button>
                </div>
              )}
          </div>
        </div>
       

        {imagesSmall && imagesSmall.length > 1 ? ( // Error Handling
          <div className="minimap flex justify-center space-x-2 mt-4">
            {imagesSmall.map((image, index) => (
              <img
                key={index}
                src={image}
                className={
                  index === currentImageIndex
                    ? "w-16 h-16 border-2 border-blue-500"
                    : "w-16 h-16"
                }
                onClick={() => handleImageClick(index)}
                alt={`Carousel thumbnail ${index + 1}`}
              />
            ))}
          </div>
        ) : (
          <div className="error-message">No thumbnail images available</div>
        )}
      </div>
    </>
  );
};

export default Carousel;
