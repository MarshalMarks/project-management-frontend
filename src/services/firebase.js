import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail,
    signOut 
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCT4mQRh2L_EN3tQVOUoQH-K72Aq7o2vmc",
    authDomain: "project-management-2dc3c.firebaseapp.com",
    projectId: "project-management-2dc3c",
    storageBucket: "project-management-2dc3c.appspot.com",
    messagingSenderId: "688330650216",
    appId: "1:688330650216:web:6fe2bae387a2a5ba6681dd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        return res.user;
    } catch (err) {
        console.error(err);
        alert(err.message);
        return null;
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout
};