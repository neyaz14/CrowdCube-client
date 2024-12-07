import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [Currentuser, setCurrentUser] = useState(null);
    const [loading, setloading] = useState(true);
    const currentloggedInUser = auth.currentUser ;
    

    // console.log(currentloggedInUser);
    // console.log(Currentuser);
    // console.log(/)
    const googleProvider =new GoogleAuthProvider();
    const googleRegister= ()=>{
        setloading(true);
        return signInWithPopup(auth, googleProvider)
    }
    
    const register =(email, password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth , email, password);
    }
    const login =(email, password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const singOut = () => {
        setloading(true);
        return signOut(auth);
    }

    const updateUserProfile=(updateData)=>{
        
        return updateProfile(auth.currentUser, updateData);
    }

// ovserber 

    useEffect(()=>{
        const loginUser = onAuthStateChanged(auth, Currentuser=>{
           
            setCurrentUser(Currentuser);
            setloading(false);
        })
        return()=>{
            loginUser();
        }
    },[])

    const authInfo ={
        register, login, googleRegister, loading, Currentuser, setCurrentUser ,updateUserProfile,
        currentloggedInUser ,
        singOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;