import Chip from "./Chip";
import { useState, useContext, useEffect } from "react";
import { CardContext } from "../../context/CardContext";

const ChipTabsBonus = () => {
  const {  setSelectedBonusTab, selectedBonusTab } =
    useContext(CardContext);

  const [selected, setSelected] = useState(selectedBonusTab);
  
  useEffect(() => {
    selectedBonusTab !== selected && setSelectedBonusTab(selected);
  }, [selected]);

  const handleSelected = (text) => {
    if (text !== selected) {
      setSelected(text);
    }
  };
  return (
    <div className="grid w-full grid-cols-3 items-center justify-center gap-4 text-lg  md:gap-12 md:text-2xl">
      { ["Mega", "Pro", "Arsenal"].map((tab) => (
        <Chip
          text={tab}
          selected={selectedBonusTab === tab}
          setSelected={handleSelected}
          key={tab}
          type={'bonus'}
        />
      ))}
    </div>
  );
};




export default ChipTabsBonus;
