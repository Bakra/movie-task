import { useEffect, useState } from "react";

export const useAuth = () => {
    const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
        setUser(JSON.parse(user));
        setLoggedIn(true)
    }
  }, []);

  const login = (userData: object) => {
      setLoggedIn(true)
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
      setLoggedIn(false)
      setUser({});
      localStorage.removeItem('user');
  };

    return { user, login, logout, loggedIn };
};