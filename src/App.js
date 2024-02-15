import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Calendar from './pages/Calendar';
import GlobalStyles from './styles/GlobalStyles';
import Profile from './pages/Profile';
import Playlist from './pages/Playlist';
import ProfileChange1 from './pages/ProfileChange1';
import ProfileChange2 from './pages/ProfileChange2';
import ProfileChange3 from './pages/ProfileChange3';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/profilechange1" element={<ProfileChange1 />} />
        <Route path="/profilechange2" element={<ProfileChange2 />} />
        <Route path="/profilechange3" element={<ProfileChange3 />} />
        




      </Routes>
    </>
  );
}

export default App;
