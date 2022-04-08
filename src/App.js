import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import CommentsPage from "./pages/CommentsPage";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/comments/:id" element={<CommentsPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
