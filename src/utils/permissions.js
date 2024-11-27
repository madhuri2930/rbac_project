export const hasPermission = (rolePermissions, requiredPermission) =>
    rolePermissions.includes(requiredPermission);
  