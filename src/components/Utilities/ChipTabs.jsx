import { motion } from "framer-motion";
import { useState, useContext,useEffect } from "react";
import { CardContext } from "../../context/CardContext";



const ChipTabs = ({type}) => {
 const {productTabs,bonusTabs, setSelectedProductTab, setSelectedBonusTab} = useContext(CardContext)

 const tabs = type === 'products' ? productTabs : bonusTabs;

 const [selected, setSelected] = useState(tabs[1])
 const handleSetSelectedTab = ()=>{
  type === 'products'? setSelectedProductTab(selected) : setSelectedBonusTab(selected)
 }

 useEffect(()=>{
    handleSetSelectedTab()
 },[selected])
  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-12 text-2xl">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      }  transition-colors px-6 py-4 min-w-[20%] rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-teal-400 via-blue-600 to-indigo-700 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;