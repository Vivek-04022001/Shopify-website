import Chip from "./Chip";
import { useState, useContext, useEffect } from "react";
import { CardContext } from "../../context/CardContext";

const ChipTabsProduct = () => {
  const {
    selectedProductTab,
    setSelectedProductTab,

    tabValue,
  } = useContext(CardContext);

  const [selected, setSelected] = useState(selectedProductTab);

  useEffect(() => {
    selectedProductTab !== selected && setSelectedProductTab(selected);
  }, [selected]);

  const handleSelected = (text) => {
    if (text !== selected) {
      setSelected(text);
    }
  };

  return (
    <div className="grid w-full grid-cols-3  items-center justify-center gap-4 text-lg  md:gap-12 md:text-2xl">
      {["Mega", "Pro", "Arsenal"].map((tab, index) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={handleSelected}
          key={index}
          type={'product'}
        />
      ))}
    </div>
  );
};

export default ChipTabsProduct;
