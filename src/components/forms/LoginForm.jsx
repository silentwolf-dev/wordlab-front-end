const LoginForm = ()=>{
    return(
        <div className="Login-form-container">
            <form className="Login-form">
                <div className="form-group">
                      <label htmlFor="">Email:</label>
                      <input type="email" placeholder="Email" required/>
                </div>

                <div className="form-group">
                      <label htmlFor="">Password:</label>
                      <input type="password" placeholder="Password" required/>
                </div>
            </form>

            <button type="submit">Login in</button>
        </div>
    )
}


export default LoginForm;