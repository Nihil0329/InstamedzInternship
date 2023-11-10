import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Diseases from './pages/Diseases/Diseases';
import Quest from './pages/Questionnaire/Questionnaire';
import Description from './pages/Description/Description';
import QuestResult from './pages/Questionnaire/QuestResult';

function App() {
  return (
    <div>
      <Router>
            <Routes>
                <Route path='/' element={<Diseases />}></Route>
                <Route path='/q' element={<Quest />}></Route>
                <Route path='/d' element={<Description />}></Route>
                <Route path='/r' element={<QuestResult />}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;