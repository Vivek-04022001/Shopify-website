import React, { createContext, useContext, useState } from "react";

export const CardContext = createContext();

const tabValue = ["Mega", "Pro", "Arsenal"];

export const CardProvider = ({ children }) => {
  const [selectedProductTab, setSelectedProductTab] = useState("Mega");
  const [selectedBonusTab, setSelectedBonusTab] = useState("Mega");
  const [productTabs] = useState(tabValue);
  const [bonusTabs] = useState(tabValue);

  const contextValue = {
    selectedProductTab,
    setSelectedProductTab,
    selectedBonusTab,
    setSelectedBonusTab,
    productTabs,
    bonusTabs,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};
