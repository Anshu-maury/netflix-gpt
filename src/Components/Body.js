import { useEffect } from "react";
import { Browse } from "./Browse";
import Login from "./Login";
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { auth } from "../Utils/fireBase";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ]);

    useEffect(() => {
            onAuthStateChanged(auth, (user) => {
              if (user) {
            // User is signed in, see docs for a list of available properties
                 // https://firebase.google.com/docs/reference/js/auth.user
                const {uid,email,displayName} = user;
                dispatch(addUser({uid:uid, email:email,displayName:displayName}));
              // ...}
              } else {
                dispatch(removeUser());
                
             // User is signed out
            // ...
          }
            });
           },[])

    return ( <div>
        <RouterProvider router={appRouter} />
    </div>
    )
};
export default Body;