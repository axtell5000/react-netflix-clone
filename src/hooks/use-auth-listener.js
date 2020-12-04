import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  // state and checking localstorage for user
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

  // pull context - the firebase object
  const { firebase } = useContext(FirebaseContext);

  // to run one time
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      // authUser is returned from firebase
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    // to clean up, to avoid sideeffects - have to do this
    return () => listener();
  }, []);

  return { user };
}