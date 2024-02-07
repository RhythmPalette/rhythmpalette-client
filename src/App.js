import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Calendar from './pages/Calendar';
import GlobalStyles from './styles/GlobalStyles';
import Profile from './pages/Profile';
import Playlist from './pages/Playlist';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/playlist" element={<Playlist />} />




      </Routes>
    </>
  );
}

export default App;
