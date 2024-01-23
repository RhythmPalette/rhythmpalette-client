import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import GlobalStyles from './styles/GlobalStyles';
import Login from './pages/LoginPage/Login';
import SignUp_id from './pages/LoginPage/SignUp_id';
import SignUp_pw from './pages/LoginPage/SignUp_pw';
import SignUp_email from './pages/LoginPage/SignUp_email';
import SignUp_check from './pages/LoginPage/SignUp_check';

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
      </Routes>
    </>
  );
}

export default App;
