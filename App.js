import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Chat from './Chat'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="chat" element={<Chat/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
