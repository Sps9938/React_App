
import './App.css'
import Login from './Components/Login'
import Profile from './Components/UserProfile'
import UserContextProvider from './Context/UserContextProvider'

function App() {


  return (
   <UserContextProvider>
    <h1>React With Red Tea</h1>
    <Login />
    <Profile />
   </UserContextProvider>
  )
}

export default App
