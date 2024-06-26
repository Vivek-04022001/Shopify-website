import ChipTabsBonus from "../Utilities/ChipTabsBonus.jsx";
import Cards from "../Utilities/Cards.jsx";
import { useState, useEffect } from "react";
import { BonusTabStatus } from "../../store/products/productsSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { setProductOptions } from "../../store/productspage/productspageSlice.js";

const priceTag = [
  {
    title: "Mega",
    price: "₹7492",
  },
  {
    title: "Pro",
    price: "₹12496",
  },
  {
    title: "Arsenal",
    price: "₹18850",
  },
];

const Bonus = () => {
  const selectedBonusTab = useSelector(BonusTabStatus);
  const [worth, setWorth] = useState(priceTag[1].price);
const dispatch = useDispatch()
  const handlePrice = () => {
    priceTag.forEach((element) => {
      if (element.title === selectedBonusTab) setWorth(element.price);
    });
  };
  useEffect(() => {
    handlePrice();
  }, [selectedBonusTab]);

 

  return (
    <section id="bonus">
      <div className="Container">
        <div className="flex flex-col items-center  gap-5 md:gap-10 mt-20 ">
          <h2 className="heading heading-md ">
            Unlock <span className="highlight">Bonuses</span> Worth
            <span className="bg-gradient-to-r from-teal-400 via-blue-600 to-indigo-700 text-white rounded-md px-2 mx-4  border-white">
              {worth}
            </span>{" "}
            If You Enroll Today
          </h2>
          <h2 className="text-xl highlight font-bold">Our Bonuses</h2>
          <ChipTabsBonus />
          <Cards type={"bonus"} />
        </div>
      </div>
    </section>
  );
};

export default Bonus;
