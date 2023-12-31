import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import GlobalStyles from './styles/GlobalStyles';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
