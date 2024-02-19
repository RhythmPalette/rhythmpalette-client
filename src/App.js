import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Searching from './pages/Searching';
import Posts from './pages/Posts';
import GlobalStyles from './styles/GlobalStyles';
import UploadPost from './pages/UploadPost';
import MakeImages from './pages/MakeImages';
import Calendar from './pages/Calendar';
import Login from './pages/LoginPage/Login';
import SignUp_id from './pages/LoginPage/SignUp_id';
import SignUp_pw from './pages/LoginPage/SignUp_pw';
import SignUp_email from './pages/LoginPage/SignUp_email';
import SignUp_check from './pages/LoginPage/SignUp_check';
import Register_profile from './pages/RegisterProfilePage/Register_profile';
import Favorite_categories from './pages/RegisterProfilePage/Favorite_categories';
import Profile_music from './pages/RegisterProfilePage/Profile_music';
import Home from './pages/home';
import Shortform from './pages/ShortForm';
import Profile from './pages/Profile';
import DecidePosts from './pages/DecidePosts';
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
        <Route path="/searching" element={<Searching/>}/>
        <Route path="/post/:inputValue" element={<Posts/>}/>
        <Route path="/uploadpost" element={<UploadPost/>}/>
        <Route path="/makeimages" element={<MakeImages/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup_id" element={<SignUp_id />} />
        <Route path="/signup_pw" element={<SignUp_pw />} />
        <Route path="/signup_email" element={<SignUp_email />} />
        <Route path="/signup_check" element={<SignUp_check />} />
        <Route path="/register_profile" element={<Register_profile />} />
        <Route path="/Favorite_categories" element={<Favorite_categories />} />
        <Route path="/Profile_music" element={<Profile_music />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shortform" element={<Shortform />} />
        <Route path="/decideposts" element={<DecidePosts/>}/>
      </Routes>
    </>
  );
}

export default App;
