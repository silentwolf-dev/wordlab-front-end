
const LoginForm = ()=>{
    return(
        <div className="Login-form-container">
            <form className="Login-form">
                <div className="login-form-group">
                      <label htmlFor="">Email:</label>
                      <input 
                      className="form-control"
                      type="email" 
                      placeholder="Email" 
                      required/>
                </div>

                <div className="login-form-group">
                      <label htmlFor="">Password:</label>
                      <input 
                      className="form-control"
                      type="password" 
                      placeholder="Password" 
                      required/>
                </div>
                <button 
                type="submit" 
                className="login-btn"
                >
                Login in
                </button>
            </form>
        </div>
    )
}


export default LoginForm;