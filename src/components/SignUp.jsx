
import { auth, firestore } from "../base.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
// import { setDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { navigate } from "@reach/router";
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)
    const onNameChange = (event) => setName(event.target.value)
    const onSignUp=(e)=> {
        e.preventDefault();
        async function onReg() {
            
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setDoc(doc(firestore, "users", userCredential.user.uid), {
                    name: name,
                    email: email
                }).then((result)=> {
                    console.log("success");
                    alert("Logged In!");
                    navigate('/profile');
                    
                });
                
                

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
            

        }

        onReg();
        
        // setEmail("");
        // setPassword("");
        // setName("");
        // window.location.reload();
    }
    
    return (
        <div className='Login'>
        <form>
        <div class="form-group">
          <label for="inputName">Name</label>
          <input type="inputName" onChange = {onNameChange} class="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter name" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input onChange = {onEmailChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp"  class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" onChange = {onPasswordChange}  class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        {/* <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Sign up to get emails!</label>
        </div> */}
        <button type="submit" class="btn btn-primary" onClick={(e)=>onSignUp(e)}>Sign up</button>
      </form>
      </div>
    );
};

export default SignUp;