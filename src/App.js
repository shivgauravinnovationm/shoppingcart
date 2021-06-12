import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <Login />

    </div>
  );
}

export default App;
