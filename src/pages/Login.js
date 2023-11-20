import "./../App.css"
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../services/firebase"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        await logInWithEmailAndPassword(email, password);
        console.log('Logged in successfully!');
      } catch (error) {
        console.error('Error logging in:', error.message);
      }
    };

    return (
        <>
            <div className="login">
                <form className="form">
                    <h2>Log In</h2>
                    <label>Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <label>Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button onClick={handleLogin}>Log In</button>
                    <p>Don't have an account yet? <Link to="/register">Sign Up</Link></p>
                </form>
            </div>
        </>
    );
}

export default Login;