import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Calendar from './pages/Calendar';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/home';
import Shortform from './pages/ShortForm';
import Profile from './pages/Profile';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shortform" element={<Shortform />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
