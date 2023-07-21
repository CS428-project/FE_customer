import React, { createContext, useContext, useState } from 'react';
// import { auth } from '../auth/firebase.js';

interface AuthContextProps {
  currentUser: any; // Replace 'any' with the appropriate type for your currentUser data.
}

const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
});

export function useAuth(): AuthContextProps {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: React.PropsWithChildren<{}>) {
  const [currentUser, setCurrentUser] = useState<any>(null); // Replace 'any' with the appropriate type for your currentUser data.

  function signup(email: string, password: string) {
    // Implement your signup logic here
  }

  const value: AuthContextProps = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
