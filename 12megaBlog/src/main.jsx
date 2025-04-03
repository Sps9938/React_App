import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from './components/AuthLayout.jsx'
import {Home, AddPost, EditPost, AllPosts, Signup, Login, Post } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/login",
        element: (
          <AuthLayout autentication={false}>
            <Login />
          </AuthLayout>
        ),      
      },

      {
        path: "/signup",
        element: (
          <AuthLayout autentication={false}>
            <Signup />
          </AuthLayout>
        )
      },

      {
        path: "/all-post",
        element: (
          <AuthLayout autentication={false}>
          <AllPosts />
        </AuthLayout>
        )
      },

      {
        path: "/add-post",
        element: (
          <AuthLayout autentication={false}>
          <AddPost />
        </AuthLayout>
        )
      },

      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout autentication={false}>
          <EditPost />
        </AuthLayout>
        )
      },

      {
        path: "/post/:slug",
        element: <Post />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,

)
