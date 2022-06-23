import { signInWithPopup, GoogleAuthProvider, OAuthCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebaseConfig'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../state/store";
import { loginInReducer } from "../../state/slices/LoginSlice";

const providerGoogleAuth = new GoogleAuthProvider();

const LoginWithGoogle: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector((state: RootState) => state.login)


    useEffect(() => {
        if (user !== null) {
            navigate("/products")
        }
    }, [])

    const signInWithGoogleButton = () => {
        signInWithPopup(auth, providerGoogleAuth)
            .then((result) => {
                const credential: OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);
                const token = credential!.accessToken;
                const user = result.user.displayName;

                dispatch(loginInReducer(user))

                navigate('/products')

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                const email = error.email;

                const credential = GoogleAuthProvider.credentialFromError(error);
            })
    }

    return (
        <div>
            <button onClick={signInWithGoogleButton}>Log in with Google</button>
        </div>
    )
}

export default LoginWithGoogle;