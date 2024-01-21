import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Searching from './pages/Searching';
import Posts from './pages/Posts';
import GlobalStyles from './styles/GlobalStyles';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/searching" element={<Searching/>}/>
        <Route path="/post/:inputValue" element={<Posts/>}/>
      </Routes>
    </>
  );
}

export default App;
