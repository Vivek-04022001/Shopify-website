import Image1 from "../assets/Showcase/2000+motionmarvels/1st.png";
import { Products } from "../Data/Data";
import { useEffect, useState, useMemo } from "react";
import { renderToString } from "react-dom/server";

const defaultSelectOptions = (Products) => {
  const options = Products.map((product) => product.description.h1_title);
  return options;
};

const ProductPage = () => {
  const selectOptions = useMemo(
    () => defaultSelectOptions(Products),
    [Products]
  );
  const [selectedProduct, setSelectedProduct] = useState("");
  const [currentProduct, setCurrentProduct] = useState(Products[0]);

  const handleSelectChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  useEffect(() => {
    const current = Products.find(
      (product) => product.description.h1_title === selectedProduct
    );

    setCurrentProduct(current);
  }, [selectedProduct]);

  let name, description, images;

  if (currentProduct) {
    ({ name, description, images } = currentProduct);
  } else {
    ({ name, description, images } = Products[0]);
  }

  // console.log(currentProduct);

  return (
    <section>
      <div className="container mx-auto max-w-6xl min-h-screen flex flex-col py-24">
        {/* select option */}
        <select
          className="select select-lg select-bordered w-full max-w-xs mx-auto mb-10"
          onChange={handleSelectChange}
        >
          {/* <option value="Pick Next Product!" selected disabled>
            Pick Next Product!
          </option> */}
          {selectOptions.map((selectOption, index) => (
            <option key={selectOption + index} value={selectOption}>
              {selectOption}
            </option>
          ))}
        </select>
        {/* product info */}
        <div className="flex gap-10 ">
          <div className="w-1/2">
            <Carousel images={images} />
          </div>

          <div className="w-1/2 flex flex-col  ">
            <ProductDescription name={name} description={description} />
          </div>
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
          <img src={images[currentImageIndex]} className="w-full " />

          {/* <ImageMagnifier imgUrl={images[currentImageIndex]} /> */}

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

const ProductDescription = ({ name, description }) => {
  return (
    <div className="flex flex-col gap-2 px-2 gap-y-4">
      <h1 className="md:text-5xl text-4xl font-bold text-white ">
        {description.h1_title}
      </h1>

      <h2 className="font-bold semi-bold text-xl">{description.h2_title}</h2>

      <h3 className="underline underline-offset-4 mt-6">
        {description.h3_title1}
      </h3>
      <RenderList list={description.h3_list1} />

      <h3 className="underline underline-offset-4 mt-6">
        {description.h3_title2}
      </h3>
      <RenderList list={description.h3_list2} />

      {description.h3_title3 && (
        <>
          <h3 className="underline underline-offset-4 mt-6">
            {description.h3_title3}
          </h3>
          <p className="italic text-lg leading-tight">
            {description.h3_description3}
          </p>
        </>
      )}

      <h3 className="underline underline-offset-4 mt-6">
        {description.h3_title4}
      </h3>
      <p className="italic text-lg leading-tight">
        {description.h3_description4}
      </p>
    </div>
  );
};

const RenderList = ({ list }) => {
  function highlightBeforeColon(inputString) {
    const parts = inputString.split(":");
    if (parts.length < 2) {
      return inputString;
    }

    const highlighted = (
      <>
        <span className="text-yellow-300 font-semibold">{parts[0]} </span>
        <span>: {parts[1]}</span>
      </>
    );

    return renderToString(highlighted);
  }
  return (
    <ul className="space-y-2">
      {list.map((row, index) => (
        <li
          key={index}
          dangerouslySetInnerHTML={{
            __html: `${renderToString(
              <span>{index + 1}</span>
            )} ${highlightBeforeColon(row)}`,
          }}
        />
      ))}
    </ul>
  );
};

export default ProductPage;
