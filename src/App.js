import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Calendar from './pages/Calendar';
import GlobalStyles from './styles/GlobalStyles';
import Profile from './pages/Profile';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />



      </Routes>
    </>
  );
}

export default App;
