import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/home';
import Shortform from './pages/ShortForm';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shortform" element={<Shortform />} />
      </Routes>
    </>
  );
}

export default App;
