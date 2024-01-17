import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiConfirmed } from "react-icons/gi";

const Modal = ({ isOpen, onClose, productInfo }) => {
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
          overflow-hidden rounded-lg bg-gradient-to-tr from-teal-400 via-blue-600 to-indigo-700 p-6 text-white shadow-xl"
          >
            <GiConfirmed className="absolute -left-10 -top-14 z-0 rotate-12 text-[200px] text-white/20" />
            <div className="relative z-10">
              <h2 className="text-center text-2xl font-bold md:text-4xl">
                Confirm the product
              </h2>
              <h3 className="mb-2 text-center text-lg  font-bold md:text-2xl ">
                One more time ⏱️
              </h3>

              <article className="max-h-[25dvh] overflow-auto px-1">
                <h3 className="my-2 text-center text-lg font-bold md:my-6 md:text-2xl">
                  Offer Selected{" "}
                  <span className=" rounded-full bg-white px-2 py-1 text-primary">
                    {" "}
                    {productInfo.Offer}
                  </span>
                </h3>
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
                  Understood!
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
