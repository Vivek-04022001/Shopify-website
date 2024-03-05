import Data from "../../Data/Data";
import { useSelector } from "react-redux";
import {
  ProductTabStatus,
  BonusTabStatus,
} from "../../store/products/productsSlice";
import SingleCardLayout from "./SingleCardLayout";

const Cards = ({ type }) => {
  const currentProductTab = useSelector(ProductTabStatus);
  const currentBonusTabs = useSelector(BonusTabStatus);

  const selectedTab =
    type === "products" ? currentProductTab : currentBonusTabs;

  const selectedData = Data.find((product) => product.Offer === selectedTab)[
    type
  ];

  return (
    <>
      <h2 className="heading mt-4 rounded-lg border border-dashed px-8 py-4 text-sm md:text-2xl font-bold tracking-widest">
        Products Quantity: {selectedData.length}
      </h2>
      <div className="items-between mt-4 grid  w-full grid-cols-1  gap-20 md:grid-cols-2 ">
        {selectedData.map((product) => {
          return (
            <SingleCardLayout
              data={product}
              animationProps={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
              }}
              key={product.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
