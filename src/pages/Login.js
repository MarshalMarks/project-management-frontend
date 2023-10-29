import "./../App.css"
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="login">
                <form className="form">
                    <label>Log In</label>
                    <input className="input" type="email" name="email" placeholder="Email" required></input>
                    <input className="input" type="password" name="password" placeholder="Password" required></input>
                    <button>Log In</button>
                    <p>Don't have an account yet? <Link to="/register">Sign Up</Link></p>
                </form>
            </div>
        </>
    );
}

export default Login;