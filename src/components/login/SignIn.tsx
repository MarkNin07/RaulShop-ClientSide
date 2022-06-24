import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

interface ISignInProps {
}

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const onChangeUsername = (e:React.ChangeEvent<HTMLInputElement>) =>
        setUsername(e.target.value)

    const [pwd, setPwd] = useState('');
    const onChangePwd = (e:React.ChangeEvent<HTMLInputElement>) =>
        setPwd(e.target.value)

    const sendSignUp = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if(username && pwd){
            createUserWithEmailAndPassword(auth, username, pwd).then((userCredentials) => {
                const userInfo = userCredentials.user
            })

            .catch((error) => {
                const errorCode = error.code
                const errorMsg = error.message
            })
            setUsername('')
            setPwd('')
            navigate('/')

        }

    }

  return (
    <div className="login-form">
        <h1>Login to Raul's Hardware Shop</h1>
        <form>
            <label>Username:  </label>
            <input type="text" value={username} onChange={onChangeUsername}/>
            <br /> <br />
            <label>Password:  </label>
            <input type="password" value={pwd} onChange={onChangePwd}/>
            <br /> <br />
            <button onClick={(e) => sendSignUp(e)}>Login</button>
        </form>
    </div>
  );
};

export default SignIn;
