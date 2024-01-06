import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Searching from './pages/Searching';
import Post from './pages/Post';
import GlobalStyles from './styles/GlobalStyles';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/searching" element={<Searching/>}/>
        <Route path="/post" element={<Post/>}/>
      </Routes>
    </>
  );
}

export default App;
