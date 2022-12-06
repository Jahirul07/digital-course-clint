import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const loginWithGitHub = () => {
        return signInWithPopup(auth, gitHubProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, logOut, createUser, signIn, loginWithGoogle, loginWithGitHub }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;