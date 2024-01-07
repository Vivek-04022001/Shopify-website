import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

import { CardContext } from "../../context/CardContext";
import Data from "../../Data/Data";

const Cards = ({ type }) => {
  const { selectedProductTab, selectedBonusTab } = useContext(CardContext);

  const selectedTab =
    type === "products" ? selectedProductTab : selectedBonusTab;
  const productData = Data.find((product) => product.Offer === selectedTab)[
    type
  ];

  return (
    <>
      <h2 className="heading mt-4 rounded-lg border border-dashed px-8 py-4 text-2xl font-bold tracking-widest">
        Products Quantity: {productData.length}
      </h2>
      <div className="items-between mt-4 grid  w-full grid-cols-1  gap-20 md:grid-cols-2 ">
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
      className=" flex flex-col justify-between gap-y-8 overflow-hidden rounded border-4 border-dashed bg-gradient-to-b from-secondary via-primary to-indigo-700 p-8 px-12 text-white shadow-lg"
      {...animationProps}
    >
      <img className="w-full" src={imageUrl} alt={imageUrl} />
      <div className=" flex flex-1 flex-col justify-between text-white">
        <div className="mb-4  text-4xl font-bold text-white">{title}</div>
        <p className=" w-[85%] text-slate-200">{description}</p>
      </div>
    </motion.div>
  );
};
