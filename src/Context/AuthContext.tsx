import React from "react";

interface UserInfo {
    loggedIn: boolean;
    userId: string | undefined;
    email: string | undefined;
    isAdmin: boolean;
  }
  
  interface ContextValue {
    userInfo: UserInfo;
    updateUserInfo: (info: Partial<UserInfo>) => void;
  }
  
  export const AuthContext = React.createContext<ContextValue>({
    userInfo: {
      loggedIn: true,
      userId: undefined,
      email: undefined,
      isAdmin: false,
    },
    updateUserInfo: () => {}, // Dummy function
  });
  

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = React.useState({
      loggedIn: false,
      userId: undefined,
      email: undefined,
      isAdmin: false,
    });
  
    const updateUserInfo = (info) => {
      setUserInfo({ ...userInfo, ...info });
    };
  
    return (
      <AuthContext.Provider value={{ userInfo, updateUserInfo }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;