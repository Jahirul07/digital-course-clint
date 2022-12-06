import React, {createContext} from 'react';
// import {getAuth} from '../../firebase/firebase.config'

export const AuthContext = createContext()

// const auth = getAuth()

const AuthProvider = ({children}) => {
    const user = {displayName: 'Jahirul Islam'}

    const authInfo = {user}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;