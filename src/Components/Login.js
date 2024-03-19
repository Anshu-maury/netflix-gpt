import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
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
            <form className=" w-3/12 absolute p-12 bg-black my-36  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="text-xl font-bold ">
                {isSignInForm ? "Sign In" : "Sign Up" }</h1>
                {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700" />)}
                <input type="text" placeholder="Email Address" className="p-2 my-2 w-full bg-gray-700" />
                <input type="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-700" />
                <button className="p-2 my-4 bg-red-700 w-full rounded-lg">
                {isSignInForm ? "Sign In" : "Sign Up" }</button>
                <p className="py-1 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now": "ALready registered? Sign In Now"}</p>
            </form>
        </div>
    </div>
    )
};
export default Login;