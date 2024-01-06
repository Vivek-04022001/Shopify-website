import React, { createContext, useState } from "react";

export const CardContext = createContext();

const tabValue = ["Mega", "Pro", "Arsenal"];


export const CardProvider = ({ children }) => {
  const [selectedProductTab, setSelectedProductTab] = useState("Pro");
  const [selectedBonusTab, setSelectedBonusTab] = useState("Pro");
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
