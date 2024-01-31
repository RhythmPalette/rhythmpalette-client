import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Searching from './pages/Searching';
import Posts from './pages/Posts';
import GlobalStyles from './styles/GlobalStyles';
import UploadPost from './pages/UploadPost';
import MakeImages from './pages/MakeImages';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/searching" element={<Searching/>}/>
        <Route path="/post/:inputValue" element={<Posts/>}/>
        <Route path="/uploadpost" element={<UploadPost/>}/>
        <Route path="/makeimages" element={<MakeImages/>}/>
      </Routes>
    </>
  );
}

export default App;
