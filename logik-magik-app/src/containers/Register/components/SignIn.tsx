import React from 'react';
import signInStyles from './SignIn.module.css';
import { SignType } from '../RegisterConstants';

type SignInProps = {
  changeSignType: (changeSignValue: string) => void
};
const SignIn = (props: SignInProps) => {
    const { changeSignType } = props;
    return (
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className={`${signInStyles.forgotPassword} text-right`}>
          <a onClick={() => changeSignType(SignType.SignUp)} href="#">New User?</a>
        </p>
      </form>
    )
  }

  export default SignIn;