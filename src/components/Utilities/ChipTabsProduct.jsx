import Chip from "./Chip";
import { useSelector, useDispatch } from "react-redux";
import {
  ProductTabStatus,
  TabsValue,
} from "../../store/products/productsSlice";
import { setSelectedProductTab } from "../../store/products/productsSlice";

const ChipTabsProduct = () => {
  const currentProductTab = useSelector(ProductTabStatus);
  const tabs = useSelector(TabsValue);
  const dispatch = useDispatch();

  const handleSelectTab = (tab) => {
    if (tab !== currentProductTab) {
      dispatch(setSelectedProductTab(tab));
    }
  };

  return (
    <div className="grid w-full grid-cols-3  items-center justify-center gap-4 text-lg  md:gap-12 md:text-2xl">
      {tabs.map((tab, index) => (
        <Chip
          text={tab}
          selected={currentProductTab === tab}
          setSelected={handleSelectTab}
          key={index}
          type={"product"}
        />
      ))}
    </div>
  );
};

export default ChipTabsProduct;
