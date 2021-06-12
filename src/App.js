import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from "./components/pages/Home"
function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Home />

    </div>
  );
}

export default App;
