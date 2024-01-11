import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Calendar from './pages/Calendar';
import GlobalStyles from './styles/GlobalStyles';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/calendar" element={<Calendar />} />

      </Routes>
    </>
  );
}

export default App;
