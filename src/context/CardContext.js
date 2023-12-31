import React, { createContext, useState } from "react";

export const CardContext = createContext({
  selectedBonusTab: null,
  selectedProductTab: null,
  setSelectedBonusTab: () => {},
  setSelectedProductTab: () => {},
  tabValue: [],
});

export const CardProvider = ({ children }) => {
  const [selectedProductTab, setSelectedProductTab] = useState("Pro");
  const [selectedBonusTab, setSelectedBonusTab] = useState("Pro");

  const tabValue = ["Mega", "Pro", "Arsenal"];
  console.log('Card context component hits. and productTab ', selectedProductTab)
  console.log('Card context component hits. and bonusTab ', selectedBonusTab)

  const contextValue = {
    selectedProductTab,
    setSelectedProductTab,
    selectedBonusTab,
    setSelectedBonusTab,
    tabValue,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};
