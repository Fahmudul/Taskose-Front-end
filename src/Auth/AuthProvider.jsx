import React, { useEffect, useState } from "react";
export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    setLoading(true);
    // return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    // return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    // return signOut(auth);
  };
  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
  //     if (currentuser) {
  //       console.log(currentuser);
  //       setUser(currentuser);
  //       setLoading(false);
  //     } else {
  //       setUser(null);
  //       setLoading(false);
  //     }
  //   });
  //   return () => {
  //     unSubscribe();
  //   };
  // }, [user]);
  const authInfo = { user, signUp, logIn, logOut, loading };

  return (
    <AuthContext.Provider value={{ authInfo }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
