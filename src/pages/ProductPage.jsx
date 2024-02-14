import Image1 from "../assets/Showcase/2000+motionmarvels/1st.png";
import { Products } from "../Data/Data";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";

const ProductPage = () => {
  const { name, description, images } = Products[0];

  return (
    <section>
      <div className="container mx-auto max-w-6xl min-h-screen flex">
        <div className="flex gap-10 items-center">
          {/* image carousel */}
         
          <div className="w-1/2">
            <Carousel images={images} />
          
          </div>

          {/* description */}
          {/* <div className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            cupiditate, facilis explicabo, deserunt corrupti incidunt sed atque
            rerum voluptates fugiat similique nam laboriosam, possimus saepe
            voluptas sequi nulla. Totam asperiores est ad, delectus iure nulla
            libero aperiam quis beatae esse nemo veritatis. Iure magni adipisci
            atque minus, quia necessitatibus laborum minima porro qui voluptatem
            assumenda sapiente commodi mollitia molestiae iusto perferendis amet
            repudiandae alias velit repellat ducimus. Voluptas nostrum modi
            deleniti sequi quod asperiores nulla, error nam labore corrupti
            iusto excepturi ab veniam enim distinctio sed aliquid eum assumenda
            est perspiciatis a fuga delectus molestias consequatur! At
            recusandae ipsum veniam similique quas eligendi itaque nesciunt vero
            qui repellat odio iste consequuntur, deserunt dolore facere
            molestiae beatae? Quia, accusantium veniam. Quas iusto
            necessitatibus quam minus, dolores doloribus vitae cum adipisci
            laudantium expedita sint velit iste aliquam doloremque corporis
            fugit. Laborum quam illo est voluptate alias ut eius, asperiores
            aspernatur, nihil unde reiciendis, vitae architecto aliquid beatae!
            Molestias sequi voluptatum excepturi quam mollitia? Voluptates
            molestias suscipit nesciunt, quidem officiis itaque? Molestiae sequi
            sit fugit in esse? Quas voluptate aspernatur quasi error et adipisci
            recusandae consequatur repudiandae sed laborum vitae distinctio aut
            impedit, dolor modi dolorum itaque quidem eius eos odit numquam
            dolorem?
          </div> */}
        </div>
      </div>
    </section>
    // <section className=" flex w-screen h-screen justify-center">
    //   <ImageZoom imageUrl={images[0]} />
    // </section>
  );
};

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="carousel w-full ">
        <div className="carousel-item relative w-full">
          <img src={images[currentImageIndex]} className="w-full " />
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
        </div>
      </div>
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
    </>
  );
};

const ImageZoom = ({ imageUrl }) => {
  return (
    <div className="border border-red-400 w-[40%] relative overflow-hidden">
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Versace",
            isFluidWidth: true,
            src: imageUrl,
            // sizes: "(max-width: 880px) 100vw, (max-width: 100px) 30vw, 360px",
          },
          largeImage: {
            src: imageUrl,
            width: 1000,
            height: 1000,
          },
          lensStyle: { backgroundColor: "red" },
          enlargedImageStyle: {
            // position: "absolute",
            zIndex: 1,
            width:'200%',
            border:'1px solid blue'
          },
        }}
        {...{
          isHintEnabled: true,
          shouldHideHintAfterFirstActivation: false,
          enlargedImagePosition: "over",
          enlargedImageContainerDimensions:{
            width:'1200%',
            height:'100%'
          },
         shouldUsePositiveSpaceLens:true,
        }}
      />
    </div>
  );
};
export default ProductPage;
