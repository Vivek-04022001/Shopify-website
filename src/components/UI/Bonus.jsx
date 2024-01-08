import ChipTabsBonus from '../Utilities/ChipTabsBonus.jsx'
import Cards from "../Utilities/Cards.jsx";
import { useContext, useState, useEffect } from "react";
import { CardContext } from "../../context/CardContext.js";

const priceTag = [
  {
    title: "Mega",
    price: "₹7499",
  },
  {
    title: "Pro",
    price: "₹12499",
  },
  {
    title: "Arsenal",
    price: "₹18890",
  },
];

const Bonus = () => {
  const { selectedBonusTab } = useContext(CardContext);
  const [worth, setWorth] = useState(priceTag[1].price)
  const handlePrice = ()=>{
    priceTag.forEach((element) =>{
        if(element.title === selectedBonusTab )
        setWorth(element.price)
    })
  }
  useEffect(()=>{
    handlePrice()
  },[selectedBonusTab])

  return (
    <section id="bonus">
      <div className="Container">
        <div className="flex flex-col items-center  gap-5 md:gap-10 mt-20">
          <h2 className="heading heading-md">
            Unlock <span className="highlight">Bonuses</span> Worth
            <span className="bg-gradient-to-r from-teal-400 via-blue-600 to-indigo-700 text-white rounded-md px-2 mx-4  border-white">{worth}</span> If You
            Enroll Today
          </h2>
          <h2 className="text-xl highlight font-bold">Our Bonuses</h2>
          <ChipTabsBonus  />
          <Cards type={"bonus"} />
        </div>
      </div>
    </section>
  );
};

export default Bonus;