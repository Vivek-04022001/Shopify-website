import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiConfirmed } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";

const Modal = ({ isOpen, onClose, productInfo,paymentLink }) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;

  const closeModal = () => {
    onClose && onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="  relative max-h-[60dvh] w-full max-w-lg
          cursor-default
          overflow-hidden rounded-lg bg-gradient-to-tr from-teal-400 via-blue-600 to-indigo-700 p-6 text-white shadow-xl "
          >
            <GiConfirmed className="absolute -left-10 -top-14 z-0 rotate-12 text-[200px] text-white/20" />
            <div className="relative z-10">
              <h2 className="text-center text-2xl font-bold md:text-4xl capitalize">
                Confirm the product
              </h2>

              <article className="max-h-[25dvh] overflow-auto px-1">
                <h3 className="capitalize text-md text-center font-thin tracking-widest md:mb-1  md:text-lg">
                  Offer Selected
                </h3>
                <h2 className="mb-1  rounded-md text-center text-lg font-bold tracking-widest md:mb-3 md:text-2xl flex items-center justify-center">
                  <span>{productInfo.Offer}</span>
                  <FaArrowRightLong className="ml-2 text-lg" />
                  {/* temporary component */}
                  <span className="ml-4 rounded-md bg-white px-2 text-secondary ">
                    {productInfo.salePrice}
                  </span>
                  {/* <span className="ml-4 rounded-md bg-white px-2 text-secondary ">
                    {productInfo.price}
                  </span> */}
                </h2>
                {/*  information */}
                <div className="mx-4">
                  {/* product info */}
                  <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-2">
                    {renderProductList(productInfo.products)}
                  </div>
                  <hr />
                  {/* bonus infor */}
                  <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-2">
                    {renderProductList(productInfo.bonus)}
                  </div>
                </div>
              </article>
              <div className="mt-8 flex gap-2">
                <button
                  onClick={closeModal}
                  className="w-full rounded bg-transparent py-2 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Nah, go back
                </button>
                <button
                  onClick={closeModal}
                  className="w-full rounded bg-white py-2 font-semibold text-indigo-600 transition-opacity hover:opacity-90"
                >
                  <a href={paymentLink} target="_blank">Understood!</a>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const renderProductList = (products) => {
  return products.map((product) => (
    <div
      key={product.id}
      className="flex flex-col items-center rounded-md border border-dashed p-2 text-center"
    >
      <img src={product.imageUrlsmall} alt={product.title} />
      <h2 className="mt-2 text-xs md:text-sm ">{product.title}</h2>
    </div>
  ));
};

export default Modal;
