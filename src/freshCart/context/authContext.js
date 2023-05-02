import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={[isLogin, setIsLogin]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
