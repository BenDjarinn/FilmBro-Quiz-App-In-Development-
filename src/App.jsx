import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Pages/LoginPage/Login';
import Register from './components/Pages/RegisterPage/Register';
import Homepage from './components/Pages/Homepage/Homepage';
import QuestionPage from './components/Pages/QuestionsPage/QuestionPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/questions' element={<QuestionPage />} />
        </Routes>
      </Router>
  );
}

export default App;
