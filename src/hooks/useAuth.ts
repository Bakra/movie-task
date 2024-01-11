import { useEffect, useState } from "react";

export const useAuth = () => {
    const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
        setUser(JSON.parse(user));
        setLoggedIn(true)
    }
  }, []);

  const login = (user: any) => {
      setLoggedIn(true)
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
      setLoggedIn(false)
      setUser(null);
      localStorage.removeItem('user');
  };

    return { user, login, logout, loggedIn };
};