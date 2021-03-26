import { Button } from '@material-ui/core';
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import {useHistory,useLocation } from "react-router-dom";

import firebaseConfig from "./firebase.config"
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



const Login = () => {
        const [loggedInUser,setLoggedInUser] = useContext(UserContext);
        console.log(loggedInUser);
        const history = useHistory ();
        const location = useLocation ();
        const { from } = location.state || { from: { pathname: "/" } };
        const handaleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {

    const {displayName, email} = result.user;
    const signInUser = {displayName, email};
    console.log(signInUser);
    setLoggedInUser(signInUser);
    history.replace(from)
    // ...
  }).catch((error) => {
    // Handle Errors here.
   
    
    // The email of the user's account used.
    
    // The firebase.auth.AuthCredential type that was used.
   
    // ...
  });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <Button onClick={handaleGoogleSignIn}>Sign In With Google</Button>
        </div>
    );
};

export default Login;