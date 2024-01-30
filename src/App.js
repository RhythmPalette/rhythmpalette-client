import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import GlobalStyles from './styles/GlobalStyles';
import Login from './pages/LoginPage/Login';
import SignUp_id from './pages/LoginPage/SignUp_id';
import SignUp_pw from './pages/LoginPage/SignUp_pw';
import SignUp_email from './pages/LoginPage/SignUp_email';
import SignUp_check from './pages/LoginPage/SignUp_check';
import Register_profile from './pages/RegisterProfilePage/Register_profile';
import Favorite_categories from './pages/RegisterProfilePage/Favorite_categories';
import Profile_music from './pages/RegisterProfilePage/Profile_music';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup_id" element={<SignUp_id />} />
        <Route path="/signup_pw" element={<SignUp_pw />} />
        <Route path="/signup_email" element={<SignUp_email />} />
        <Route path="/signup_check" element={<SignUp_check />} />
        <Route path="/register_profile" element={<Register_profile />} />
        <Route path="/Favorite_categories" element={<Favorite_categories />} />
        <Route path="/Profile_music" element={<Profile_music />} />
      </Routes>
    </>
  );
}

export default App;
