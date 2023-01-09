import './App.css';
import LandingPage from './components/Landing Page/LandingPage';
import YourInfo from './components/YourInfo/YourInfo';
import SelectPlan from './components/SelectPlan/SelectPlan';
import Addons from './components/Addons/Addons';
import Summary from './components/Summary/Summary';
import Done from './components/Done/Done';
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
          <Route path='/summary' element={<Summary/>}/>
          <Route path='/done' element={<Done/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
