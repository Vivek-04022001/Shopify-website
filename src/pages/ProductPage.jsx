import Image1 from "../assets/Showcase/2000+motionmarvels/1st.png";
import { Products } from "../Data/Data";
import { useState } from "react";

const ProductPage = () => {
  const { name, description, images } = Products[0];

  return (
    <section>
      <div className="container mx-auto max-w-6xl min-h-screen flex">
        <div className="flex gap-10 items-center">
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
          {/* <img src={images[currentImageIndex]} className="w-full " /> */}
          
            <ImageMagnifier imgUrl={images[currentImageIndex]} />
          
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

const ImageMagnifier = ({ imgUrl }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });

    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      <img className="w-full" src={imgUrl} alt="" />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 100}px`,
            pointerEvents: "none",
          }}
        >
          <div
            className="w-[200px] h-[200px] border-slate-400 border-2 "
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
