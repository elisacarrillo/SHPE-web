

const SignUp = () => {
    return (
        <div className='Login'>
        <form>
        <div class="form-group">
          <label for="inputName">Name</label>
          <input type="inputName" class="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter name" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        {/* <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Sign up to get emails!</label>
        </div> */}
        <button type="submit" class="btn btn-primary">Sign up</button>
      </form>
      </div>
    );
};

export default SignUp;