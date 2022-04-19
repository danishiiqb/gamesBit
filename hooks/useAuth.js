import { useState } from 'react';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        return;
      }
      setUser(null);
    });
    return listener;
  }, []);
  return user;
}

export default useAuth;
