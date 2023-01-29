import { navigate } from '@reach/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../base';
import { useState } from 'react';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)
    const  onSubmit =(e)=> {
        e.preventDefault();
        // console.log(email);
        async function onLog() {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("Logged In")
                navigate('/profile');
                window.location.reload();
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        }
        onLog();
        // document.getElementById('subm').addEventListener("cliick", e => {
        //     e.preventDefault();
        //     signInWithEmailAndPassword(email, password).catch(error=> {
        //         alert(error.message);
        //     })
        // })

    }
    return (
        <div className='Login'>
        <form className='outer-form'>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input onChange = {onEmailChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input onChange={onPasswordChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className='btn' onClick={() => {
            navigate('/signup');
            window.location.reload();
        }}>Click here to sign up</div>
        <br></br>
        <button class="btn btn-primary" id="subm" onClick={(e)=>onSubmit(e)}>Login</button>
      </form>
      </div>
    );
};
export default Login;
