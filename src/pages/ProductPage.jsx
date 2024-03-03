// import { Products } from "../Data/Data";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import ProductDescription from "../components/ProductDescription";
import Footer from "../components/Footer/Footer";
import {
  selectCurrentProduct,
  selectProductOptions,
  setCurrentProduct,
  setProductOptions,
} from "../store/productspage/productspageSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { product_id } = useParams();
  const selectOptions = useSelector(selectProductOptions);
  const [selectedProduct, setSelectedProduct] = useState(product_id);

  const handleSelectChange = (event) => {
    if (event.target.value) {
      dispatch(setCurrentProduct(event.target.value));
      setSelectedProduct(event.target.value);
    }
  };

  useEffect(() => {
    dispatch(setCurrentProduct(product_id));
  }, []);

  const currentProduct = useSelector(selectCurrentProduct);

 

  return (
    <>
      <Link className="block text-center text-3xl pt-4" to="/">
        🏠
      </Link>
      <section>
        <div className="container mx-auto max-w-6xl min-h-screen flex flex-col py-24">
          <select
            className="select select-lg select-bordered w-full max-w-xs mx-auto mb-10"
            onChange={handleSelectChange}
            value={selectedProduct}
          >
            {selectOptions.map((selectOption, index) => (
              <option key={selectOption + index} value={selectOption}>
                {selectOption}
              </option>
            ))}
          </select>

          {currentProduct && (
            <div className="flex gap-10 md:flex-row flex-col items-center md:items-start">
              <Carousel images={currentProduct.images} imagesSmall={currentProduct.imagesSmall}/>
              <ProductDescription
                name={currentProduct.name}
                description={currentProduct.description}
              />
            </div>
          )}
          
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

// const ImageMagnifier = ({ imgUrl }) => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [showMagnifier, setShowMagnifier] = useState(false);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   const handleMouseHover = (e) => {
//     const { left, top, width, height } =
//       e.currentTarget.getBoundingClientRect();
//     const x = ((e.pageX - left) / width) * 100;
//     const y = ((e.pageY - top) / height) * 100;
//     setPosition({ x, y });

//     setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
//   };

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setShowMagnifier(true)}
//       onMouseLeave={() => setShowMagnifier(false)}
//       onMouseMove={handleMouseHover}
//     >
//       <img className="w-full" src={imgUrl} alt="" />

//       {showMagnifier && (
//         <div
//           style={{
//             position: "absolute",
//             left: `${cursorPosition.x - 100}px`,
//             top: `${cursorPosition.y - 100}px`,
//             pointerEvents: "none",
//           }}
//         >
//           <div
//             className="w-[200px] h-[200px] border-slate-400 border-2 "
//             style={{
//               backgroundImage: `url(${imgUrl})`,
//               backgroundPosition: `${position.x}% ${position.y}%`,
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// const ProductDescription = ({ name, description }) => {
//   return (
//     <div className="flex flex-col gap-2 px-2 gap-y-4">
//       <h1 className="md:text-5xl text-4xl font-bold text-white ">
//         {description.h1_title}
//       </h1>

//       <h2 className="font-bold semi-bold text-xl">{description.h2_title}</h2>

//       <h3 className="underline underline-offset-4 mt-6">
//         {description.h3_title1}
//       </h3>
//       <RenderList list={description.h3_list1} />

//       <h3 className="underline underline-offset-4 mt-6">
//         {description.h3_title2}
//       </h3>
//       <RenderList list={description.h3_list2} />

//       {description.h3_title3 && (
//         <>
//           <h3 className="underline underline-offset-4 mt-6">
//             {description.h3_title3}
//           </h3>
//           <p className="italic text-lg leading-tight">
//             {description.h3_description3}
//           </p>
//         </>
//       )}

//       <h3 className="underline underline-offset-4 mt-6">
//         {description.h3_title4}
//       </h3>
//       <p className="italic text-lg leading-tight">
//         {description.h3_description4}
//       </p>
//     </div>
//   );
// };

export default ProductPage;
