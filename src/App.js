import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Collection";
import Collection from './Pages/Home';
import Ours from "./Pages/Ours";

export default function App() {
  return (
    <div className="App">
      <header>
        <Link href="/">Home</Link>
        <Link href="/Ours">Ours</Link>
        <Link href="/Collection">Collection</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Ours" element={<Ours />}/>
        <Route path="/Collection" element={<Collection/>}/>
        <Route path="*" element={<Home />}/>
      </Routes>
    </div>
    );
  }