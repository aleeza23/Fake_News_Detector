import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuickScan from './pages/QuickScan';
import Usage from './pages/Usage';

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<QuickScan />} />
        <Route path='/usage' element={<Usage />} />

      </Routes>
    </BrowserRouter>

  </>;
};

export default App;


