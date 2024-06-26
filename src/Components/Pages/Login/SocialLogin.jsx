import React, { useContext, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { FacebookAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';
import { AuthContext } from './../../../Providers/AuthProvider';
import useAxiosSecure from './../../Hooks/useAxiosSecure';

const SocialLogin = () => {
  const facebookProvider = new FacebookAuthProvider();
  const { createUser, user, updateUserData, googleRegister, FacebookSign } =
    useContext(AuthContext);
  const [error, setErr] = useState('');
  const [axiosSecure] = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/chatlanding';

  const handleFacebookLogin = () => {
    FacebookSign()
      .then(userCredential => {
        const user = userCredential.user;

        const credential =
          FacebookAuthProvider.credentialFromResult(userCredential);
        const accessToken = credential.accessToken;
        console.log(user);
        navigate(from, { replace: true });

        if (user) {
          Swal.fire({
            title: 'User Registered Successfully',
            icon: 'success',
            timer: 2000,
            color: '#FFFFFF',
            background:
              ' linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.66078) 100%)',

            confirmButtonColor: 'cool',
          });
        }
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleGooglesignIn = () => {
    googleRegister()
      .then(userCredential => {
        const user = userCredential.user;
        const savedUser = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };

        axiosSecure.post('/users', savedUser).then(data => {
          console.log(data);
          navigate(from, { replace: true });
          if (user) {
            Swal.fire({
              title: 'User Registered Successfully',
              icon: 'success',
              timer: 2000,
              color: '#FFFFFF',
              background:
                ' linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)',

              confirmButtonColor: 'cool',
            });
          }
        });
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="flex  flex-row mr-6 items-center justify-center ">
        <p className="mb-0  text-lg"></p>

        <button
          onClick={handleFacebookLogin}
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="mx-1 h-9 w-9 rounded-full bg-green-500  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          <FaFacebook className="mx-auto h-3.5 w-3.5" />
        </button>

        <button
          onClick={handleGooglesignIn}
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="mx-1 h-9 w-9 bg-green-500 rounded-full  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          <FaGoogle className="mx-auto h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
