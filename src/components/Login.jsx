import { navigate } from '@reach/router';
import './Login.css'
const Login = () => {
    return (
        <div className='Login'>
        <form className='outer-form'>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className='btn' onClick={() => {
            navigate('/signup');
            window.location.reload();
        }}>Click here to sign up</div>
        <br></br>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      </div>
    );
};
export default Login;
