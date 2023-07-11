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

const Context = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

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
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser();
      }
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  if (user) {
    fetch('https://mern-2023-resturent-server.vercel.app/jwt', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          localStorage.setItem('access-token', data?.token);
        }
      });
  } else {
    localStorage.removeItem('access-token');
  }

  const contextData = {
    user,
    setUser,
    logOut,
    loading,
    userWithEmailPassword,
    SignInWithEmailPassword,
  };

  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
};

export default Context;
