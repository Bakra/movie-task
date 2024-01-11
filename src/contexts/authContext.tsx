import { createContext } from 'react';
import { useAuth } from '../hooks/useAuth';
import { ReactNode } from 'react';

const UserContext = createContext({
    loggedIn: false,
    login: (arg: unknown) => { console.log(arg)},
    user: null,
    logout: () => {}
});

interface Props {
    children?: ReactNode
}

export const UserProvider = ({ children }: Props) => {

    const { loggedIn, login, logout, user } = useAuth()

    return (
        <UserContext.Provider value={{ loggedIn, login, logout, user }}>
            {children}
        </UserContext.Provider>
    );
};


export default UserContext;