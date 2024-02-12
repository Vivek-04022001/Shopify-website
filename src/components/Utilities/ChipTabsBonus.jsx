import Chip from "./Chip";
import { useSelector, useDispatch } from "react-redux";
import {
  BonusTabStatus,
  TabsValue,
  setSelectedBonusTab,
} from "../../store/products/productsSlice";

const ChipTabsBonus = () => {
  const currentBonusTab = useSelector(BonusTabStatus);
  const tabs = useSelector(TabsValue);
  const dispatch = useDispatch();

  const handleSelectTab = (tab) => {
    if (tab !== currentBonusTab) {
      dispatch(setSelectedBonusTab(tab));
    }
  };
  return (
    <div className="grid w-full grid-cols-3 items-center justify-center gap-4 text-lg  md:gap-12 md:text-2xl">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={currentBonusTab === tab}
          setSelected={handleSelectTab}
          key={tab}
          type={"bonus"}
        />
      ))}
    </div>
  );
};

export default ChipTabsBonus;
