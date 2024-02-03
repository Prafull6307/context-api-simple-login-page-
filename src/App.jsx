import Usercontextprovider from './context/UserConstextprovider'
import './App.css'
import Login from './context/components/Login'
import Profile from './context/components/Profile'
function App() {
 

  return (
    <Usercontextprovider >
      <h1>Login Page Of User</h1>
    <Login />
    <Profile />
    </Usercontextprovider>
  )
}

export default App
