import React, { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import registerStyles from './Register.module.css';
import { SignType } from './RegisterConstants';

const Register = () => {
    const [signType, setSignType] = useState("");
    const changeSignType = (changeSignValue: string) => {
        setSignType(changeSignValue);
    }
    return (
        <div className={registerStyles.authWrapper}>
          <div className={registerStyles.authInner}>
            {SignType.SignIn === signType ?
                <SignIn changeSignType={changeSignType } /> :
                <SignUp changeSignType={changeSignType } />
            }
            
          </div>
        </div>
    );
}

export default Register;