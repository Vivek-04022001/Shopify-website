import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

import { CardContext } from "../../context/CardContext";
import Data from "../../Data/Data";

const Cards = ({type}) => {

  const { selectedProductTab , selectedBonusTab } = useContext(CardContext);

  const selectedTab =type === 'products' ? selectedProductTab : selectedBonusTab
  const productData =  Data.find(
    (product) => product.Offer === selectedTab
  )[type];

  return (
    <>
      <h2 className="heading text-2xl rounded-lg font-bold border border-dashed px-8 py-4 tracking-widest mt-4">
        Products Quantity: {productData.length}
      </h2>
      <div className="w-full grid grid-cols-1  md:grid-cols-2 items-between  gap-20 mt-4 ">
        {productData.map((product, index) => {
          return (
            <>
              <Card
                data={product}
                animationProps={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                }}
                key={index}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;

const Card = ({ data, animationProps }) => {
  const { title, description, imageUrl } = data;

  return (
    <motion.div
      className=" border-4 border-dashed p-8 px-12 rounded flex flex-col justify-between gap-y-8 overflow-hidden shadow-lg text-white bg-gradient-to-b from-secondary via-primary to-indigo-700"
      {...animationProps}
    >
      <img className="w-full" src={imageUrl} alt={imageUrl} />
      <div className=" text-white flex-1 flex flex-col justify-between">
        <div className="text-white  font-bold text-4xl mb-4">{title}</div>
        <p className=" w-[85%] text-slate-200">{description}</p>
      </div>
    </motion.div>
  );
};
