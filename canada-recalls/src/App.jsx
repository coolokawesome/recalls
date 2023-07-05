import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './HomePage';
import SearchPage from './SearchPage';

function App() {


  return (
    <>
        <Router>
    <div className='homepage-header-container'>
        <div className='homepage-header'>
            <div className='homepage-header-inner container d-flex'>
              <div><h1>Canadian Recalls</h1></div>
              <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
            </div>
        </div>
    </div>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
</Router>
  </>
  );
}

export default App;
