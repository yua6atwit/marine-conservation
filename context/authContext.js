import { auth, db } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
   
export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState('');
  const [isAuthenticated, setIsAuth] = useState(undefined);

  useEffect(() =>{
    const unsub = onAuthStateChanged(auth, (user) => {
    
      if(user){
        setIsAuth(true)
        setUser(user)
        updateUserData(user.uid)
      } else {
        setIsAuth(false);
        setUser(null);
      }

    });
    return unsub;
  },[])

  const updateUserData = async (userId) => {
    const docRef = doc(db, 'users', userId)
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let data = docSnap.data()
      setUser({...user, username: data.username, userId: data.userId})
    }
  }

  const login = async (email, password) => {
    try{
      const response =  await signInWithEmailAndPassword(auth, email, password)
      return {success: true}
    }catch(e){
      let msg = e.message
      if (msg.includes('invalid-email')) msg = 'Invalid Email'
      if (msg.includes('invalid-credential')) msg = 'Invalid credentials'
      return {success: false, msg}
    }
  }

  const logout = async () => {
    try{
      await signOut(auth);
      return {success: true}
    }catch(e){
      return {success: false, msg: e.message, error: e}
    }
  }

  const signup = async (email, password, username) => {
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password)
      //console.log('response.user:', response?.user)

      await setDoc(doc(db, 'users', response?.user?.uid),
      {
        username,
        userId: response?.user?.uid,

      })
      return {success: true, data: response?.user}
    }catch(e){
      let msg = e.message
      if (msg.includes('invalid-email')) msg = 'Invalid Email'
      if (msg.includes('weak-password')) msg = 'Password should be at least 6 characters'
      if (msg.includes('email-already-in-use')) msg = 'This email is already in use'
      return {success: false, msg}
    }
  }

  return (
    // Provide the theme context value to all child components
    <AuthContext.Provider value={{user, isAuthenticated, login, logout, signup}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const value = useContext(AuthContext);
  
  if(!value){
    throw new Error('useAuth must be wrapped inside AuthContextProvider')
  }
  return value;
}
