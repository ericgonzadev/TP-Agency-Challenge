
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
  );
}

export default App;


