import { createContext } from 'react';

export const Context = createContext({
    fullname: "",
    setFullname: () => { },
    email: "",
    setEmail: () => { },
    password: "",
    setPassword: () => { },
    policy: "",
    setPolicy: () => { },
    validator: null,
    handleLogin: () => { },
    handleRegister: () => { }
});

