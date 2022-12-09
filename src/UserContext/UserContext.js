import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthProvider = createContext()

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState('')

    const singUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])
    // signOut
    const logOutUser = () => {
        signOut(auth)
    }
    const updateUser = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        })
    }





    const authInfo = {
        user,
        singUpUser,
        signInUser,
        logOutUser,
        updateUser,

    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default UserContext;