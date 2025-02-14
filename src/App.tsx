import {BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import History from './pages/History/History';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;  