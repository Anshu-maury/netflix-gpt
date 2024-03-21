import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../Utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/fireBase";
import { useNavigate} from "react-router-dom";

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const HandleButtonClick = () => {
        // Validate the Form data
        const message = checkValidateData(email.current.value,password.current.value,name.current.value);
        // console.log(message);
        setErrorMessage(message);
        if(message) return;
            //Sign in Sign up Logic
            if(!isSignInForm){
                // Sign Up Logic
                createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                // Signed up 
                  const user = userCredential.user;
                  console.log(user);
                  navigate("/browse");
                 })
                  .catch((error) => {
                  const errorCode = error.code;
                 const errorMessage = error.message;
                 setErrorMessage(errorCode + "-"+ errorMessage);
                       });
  
            }else{
                // Sign in logic
                signInWithEmailAndPassword(auth,email.current.value,password.current.value)
                  .then((userCredential) => {
                  // Signed in 
                 const user = userCredential.user;
                 console.log(user);
                     })
                       .catch((error) => {
                          const errorCode = error.code;
                               const errorMessage = error.message;
                               setErrorMessage(errorCode + "-"+ errorMessage);
                              });

            }
    };
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (<div>
        <Header />
        <div className="absolute ">
            <img src="https://www.taste.io/images/hero.jpg"
            alt="logo" />
        </div>
        <div>
            <form 
            onSubmit={(e) => e.preventDefault()}
            className=" w-5/12 absolute p-12 bg-black my-36  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 
                className="text-xl font-bold ">
                {isSignInForm ? "Sign In" : "Sign Up" }
                </h1>
                {!isSignInForm && (<input 
                ref={name}
                type="text" 
                placeholder="User Name" 
                className="p-2 my-2 w-full bg-gray-700" />)}
                <input 
                ref= {email} 
                type="text" 
                placeholder="Email Address"
                className="p-2 my-2 w-full bg-gray-700"
                />
                <input 
                ref= {password} 
                type="password"
                placeholder="Password" 
                className="p-2 my-2 w-full bg-gray-700" 
                />
                <p className="text-red-400 font-bold text-lg py-2">{errorMessage}</p>
                <button 
                className="p-2 my-4 bg-red-700 w-full rounded-lg" 
                onClick={HandleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up" }
                </button>
                <p 
                className="py-1 cursor-pointer" 
                onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now": "ALready registered? Sign In Now"}
                    </p>
            </form>
        </div>
    </div>
    )
};
export default Login;