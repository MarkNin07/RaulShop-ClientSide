import { signInWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { loginInReducer } from '../../state/slices/LoginSlice';
import LoginWithGitHub from './LoginWithGitHub';
import LoginWithGoogle from './LoginWithGoogle';

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const onChangeUsername = (e:React.ChangeEvent<HTMLInputElement>) =>
        setUsername(e.target.value)

    const [pwd, setPwd] = useState('');
    const onChangePwd = (e:React.ChangeEvent<HTMLInputElement>) =>
        setPwd(e.target.value)


    const sendLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if(username && pwd){
            signInWithEmailAndPassword(auth, username, pwd).then((userCredentials) => {
                const userInfo = userCredentials.user
                dispatch(loginInReducer(userInfo))
                navigate("/products")

                console.log(userInfo);
                console.log(userCredentials);
                
                
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMsg = error.message
            })
            setUsername('')
            setPwd('')

        }

    }

    const goToSignUp = () => {
        navigate('/signUp')
    }

  return (
      <div>
          <h1>Login to Raul's Hardware Shop</h1>
          <form>
              <label>Username</label>
              <input type="text" value={username} onChange={onChangeUsername}/>
              <br />
              <label>Password</label>
              <input type="password" value={pwd} onChange={onChangePwd}/>
              <br />
              <button onClick={(e) => sendLogin(e)}>Login</button>
          </form>
          <button onClick={goToSignUp}>Sign up</button>
          <LoginWithGoogle/>
          <LoginWithGitHub />
      </div>
  );
};

export default Login;
