// src/context/PermissionContext.js

import React, { createContext, useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';

// Create the context
const PermissionContext = createContext();

// Provider component
export const PermissionProvider = ({ children }) => {
  const user = useSelector((state) => state);

  const permissions = useMemo(() => {
    return user?.permissions?.userPermissions || [];
  }, [user]);

  

  return (
    <PermissionContext.Provider value={permissions}>
      {children}
    </PermissionContext.Provider>
  );
};

// Custom hook to use permissions
export const usePermissions = () => {
  return useContext(PermissionContext);
};
