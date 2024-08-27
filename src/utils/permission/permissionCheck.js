

import { useSelector } from 'react-redux';

export const getUserPermissions = () => {
 const permission = useSelector((state) => state?.permissions?.userPermissions);
  return permission;
};
