import { createContext, useState } from "react";
import { auth } from "../firebase-config";

const ConnexionContext = createContext();

export function ConnexionContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({auth: auth,
    info: {}});

  return (
    <ConnexionContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </ConnexionContext.Provider>
  );
}

export default ConnexionContext;