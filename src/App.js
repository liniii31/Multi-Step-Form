import './App.css';
import LandingPage from './components/LandingPage';
import YourInfo from './components/YourInfo';
import SelectPlan from './components/SelectPlan';
import Addons from './components/Addons';
import { BrowserRouter,  
  Routes,  
  Route } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/your_info' element={<YourInfo/>}/>
          <Route path='/select_plan' element={<SelectPlan/>}/>
          <Route path='/add-ons' element={<Addons/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
