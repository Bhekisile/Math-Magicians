import { Route, Routes, Link } from 'react-router-dom';
import Home from './routes/Home';
import Quote from './routes/Quote';
import './index.css';
import Calculator from './components/Calculator';
import NotMatch from './routes/NotMatch';
// import Layout from './components/Layout';

export default function App() {
  return (
    <>
      <div>
        <nav className="nav-bar">
          <span className="headingStyle">Math Magicians</span>
          <ul>
            <Link to="Home">Home |</Link>
            <Link to="Calculator">Calculator |</Link>
            <Link to="Quote">Quote</Link>
          </ul>
        </nav>
      </div>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="Home" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}
