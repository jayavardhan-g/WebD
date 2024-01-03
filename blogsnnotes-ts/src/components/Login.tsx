import { Link } from "react-router-dom";

function Login(){

    return(
    <>
    <div className="container">
    <div className="login form">
      <header>Login</header>
      <form action="#">
        <input type="text" placeholder="Enter your email"/>
        <input type="password" placeholder="Enter your password"/>
        <input type="button" className="button" value="Login"/>
      </form>
      <div className="signup">
        <span className="signup">Don't have an account?
         <Link to='/register'>Signup</Link>
        </span>
      </div>
    </div>
    </div>
    </>
    )
}

export default Login;