const users = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Editor", status: "Inactive" },
  ];
  
  const roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ];
  
  export const mockApi = {
    getUsers: () => Promise.resolve(users),
    getRoles: () => Promise.resolve(roles),
    addUser: (user) => Promise.resolve({ id: Date.now(), ...user }),
    updateUser: (id, updates) => Promise.resolve({ id, ...updates }),
    deleteUser: (id) => Promise.resolve(id),
    addRole: (role) => Promise.resolve({ id: Date.now(), ...role }),
    updateRole: (id, updates) => Promise.resolve({ id, ...updates }),
    deleteRole: (id) => Promise.resolve(id),
  };
  