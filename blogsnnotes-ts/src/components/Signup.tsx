import { Link } from "react-router-dom";

function Signup(){
    return(
    <>
    <div className="container">
    
    <div className="registration form">
      <header>Signup</header>
      <form action="#">
        <input type="text" placeholder="Enter your email"/>
        <input type="password" placeholder="Create a password"/>
        <input type="button" className="button" value="Signup"/>
      </form>
      <div className="signup">
        <span className="signup">Already have an account?
         <Link to='/signin'>Login</Link>
        </span>
      </div>
    </div>
    </div>
    </>
    )
}

export default Signup;