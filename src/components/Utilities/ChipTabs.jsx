import { motion } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { CardContext } from "../../context/CardContext";

const ChipTabs = ({ type }) => {
  const {
    productTabs,
    bonusTabs,
    setSelectedProductTab,
    setSelectedBonusTab,
    selectedBonusTab,
    selectedProductTab,
  } = useContext(CardContext);

  const [tabs, setTabs] = useState(() => {
    if (type === "products") return productTabs;
    else return bonusTabs;
  });

  const [selected, setSelected] = useState(() => {
    if (type === "products") return selectedProductTab;
    else return selectedBonusTab;
  });

  const handleSetSelectedTab = () => {
    type === "products"
      ? setSelectedProductTab(selected)
      : setSelectedBonusTab(selected);
  };

  useEffect(() => {
    handleSetSelectedTab();
  }, [selected, type]);
  return (
    <div className="grid w-full grid-cols-3  items-center justify-center gap-4 text-lg  md:gap-12 md:text-2xl">
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

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      aria-pressed={selected}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:bg-slate-700 hover:text-slate-200"
      }  relative min-w-[20%] rounded-md px-6 py-4 transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-teal-400 via-blue-600 to-indigo-700"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
