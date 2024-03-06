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
              <Carousel
                images={currentProduct.images}
                imagesSmall={currentProduct.imagesSmall}
              />
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



export default ProductPage;
