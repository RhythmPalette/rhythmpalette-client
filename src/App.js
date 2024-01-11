import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/home';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
