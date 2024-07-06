import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseconfig';

const SignedOut = () => {
  const logOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>SignOut</div>
  )
}

export default SignedOut