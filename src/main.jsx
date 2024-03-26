import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Components/Pages/Home/Home';
import AuthProvider from './Providers/AuthProvider';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Join from './Components/Join/Join';
import ChatLanding from './Components/Chat/ChatLanding';
import ChatPage from './Components/Chat/ChatPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/join',
        element: <Join></Join>,
      },
      {
        path: '/chatlanding',
        element: <ChatLanding></ChatLanding>,
      },
      {
        path: '/chatpage',
        element: <ChatPage></ChatPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
