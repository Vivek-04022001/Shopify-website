import { useCallback, useEffect, useState } from "react";
import LazyImg from "./LazyImg";
import "./Carousel.css";

const Carousel = ({ images, imagesSmall }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [images]);

  return (
    <>
      <div className="w-full px-4 md:w-1/2">
        <div className="carousel w-full overflow-visible px-5 md:px-0">
          <div
            className="carousel-item relative w-full glowing-image-root "
            style={{
              "--img-url": `url(${imagesSmall[currentImageIndex]})`,
            }}
          >
            {images && images.length > 0 ? ( // Error handling
              <LazyImg
                imageUrl={images[currentImageIndex]}
                imageUrlSmall={imagesSmall[currentImageIndex]}
              />
            ) : (
              <div className="error-message">No images available</div> // Placeholder for error state
            )}

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

        {imagesSmall && imagesSmall.length > 1 ? (
          <div className="minimap flex justify-center space-x-2 mt-4">
            {imagesSmall.map((image, index) => {
              return (
                <LazyImg
                  imageUrl={images[index]}
                  imageUrlsmall={image}
                  className={
                    index === currentImageIndex
                      ? "w-16 h-16 border-2 border-blue-500"
                      : "w-16 h-16"
                  }
                  onClick={() => handleImageClick(index)}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-white font-mono text-center
          mt-2 underline underline-offset-2">No thumbnail images available</div>
        )}
      </div>
    </>
  );
};

export default Carousel;
