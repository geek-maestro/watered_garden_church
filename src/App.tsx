import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages";
import UserManagement from "./pages/UserManagement";
import Users from "./pages/Users";
import UserAnalytics from "./pages/UserAnalytics";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <UserManagement />
      <Users />
      <UserAnalytics />
    </>
  );
}

export default App;
