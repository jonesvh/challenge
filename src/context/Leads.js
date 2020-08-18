import React, { createContext, useState, useContext } from "react";

const LeadsContext = createContext();

const LeadsProvider = ({ children }) => {
  const [leads, setLeads] = useState(0);

  return (
    <LeadsContext.Provider
      value={{
        leads,
        setLeads
      }}
    >
      {children}
    </LeadsContext.Provider>
  );
}

export const useLeads = () => {
  const context = useContext(LeadsContext);
  if (!context) throw new Error("useLeads must be used within a LeadsProvider");
  const { leads, setLeads } = context;
  return { leads, setLeads };
}

export default LeadsProvider;