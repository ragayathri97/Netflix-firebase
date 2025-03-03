import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDJkrjAjKFC68IVxK2XN2MBQBHcuC0Sy0I",
  authDomain: "netflix-project-9d731.firebaseapp.com",
  projectId: "netflix-project-9d731",
  storageBucket: "netflix-project-9d731.firebasestorage.app",
  messagingSenderId: "268603158356",
  appId: "1:268603158356:web:3f5863d2201f4c395662c1"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db= getFirestore(app);

const signup= async (name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc( collection (db, "user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        });
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login= async (email, password) =>{
    try{
      await signInWithEmailAndPassword(auth,email,password);
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () =>{
    signOut(auth);
}

export{ auth, db, login, signup, logout}