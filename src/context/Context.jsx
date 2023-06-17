import { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../firebaseConfig/firebase.config';

export const MyContext = createContext(null);
const auth = getAuth(app);
const Context = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState();

  //sign up user email and pass
  const userWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign up user email and pass
  const SignInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out user email and pass
  const logOut = () => {
    return signOut(auth);
  };

  //user management
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser();
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //get all cart data
  useEffect(() => {
    fetch('http://localhost:3000/client/cart')
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const contextData = {
    user,
    setUser,
    logOut,
    loading,
    userWithEmailPassword,
    SignInWithEmailPassword,
    cart,
  };

  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
};

export default Context;
