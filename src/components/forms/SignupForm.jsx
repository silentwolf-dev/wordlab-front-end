const SignupForm = ()=>{
    return (
     <div className="signup-form-container">
        <div className="form-header">
             <h1 className="from-title">Sign up</h1>
        </div>
       <form className="signup-form">
          <div className="form-group">
             <label htmlFor="">username:</label>
             <input 
              className="form-control"
              type="text" 
              placeholder='username' 
              required/>
          </div>
          <div className="form-group">
             <label htmlFor="">Email:</label>
             <input 
             className="form-control"
             type="text" 
             placeholder='Email' 
             required/>
          </div>

          <div className="form-group">
             <label htmlFor="">Password:</label>
             <input 
             className="form-control"
             type="password" 
             placeholder='Password'
             required/>
          </div>

          <div className="form-group">
             <label htmlFor="">confirm Password:</label>
             <input
             className="form-control" 
             type="password"
             placeholder='confirm Password' 
             required/>
          </div>

          <button 
          type="submit" 
          className="signup-form-submit-btn"
          >
            Signup
          </button>
        </form> 
    </div>
    );
}



export default SignupForm;
