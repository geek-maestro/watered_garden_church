import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Donation from './components/Donation'
import Ministries from './components/Ministries'
import Home from './pages'
import UserManagement from './pages/UserManagement'
import Users from './pages/Users'
import UserAnalytics from './pages/UserAnalytics'

function App() {

  return (
    <>
      <Navbar />
      {/* <Hero />
      <About />
      <Donation />
      <Ministries /> */}
      {/* <Events /> */}
      <Home />
      <UserManagement />
      <Users />
      <UserAnalytics />
    </>
  )
}

export default App
