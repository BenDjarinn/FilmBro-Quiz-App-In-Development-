// App.jsx
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/common/AuthComponent/AuthContext';
import ProtectedRoute from './components/common/AuthComponent/ProtectedRoute';
import Login from './components/Pages/LoginPage/Login';
import Register from './components/Pages/RegisterPage/Register';
import Homepage from './components/Pages/Homepage/Homepage';
import QuestionPage from './components/Pages/QuestionsPage/QuestionPage';
import QuizEndPage from './components/Pages/QuizEndPage/QuizEndPage';
import { useAuth } from './components/common/AuthComponent/AuthContext';

function AppRoutes() {
  const { isAuthenticated } = useAuth();
  

  return (
    <Routes>
      <Route
        path='/'
        element={isAuthenticated ? <Navigate to="/homepage" /> : <Login />}
      />
      <Route
        path='/register'
        element={isAuthenticated ? <Navigate to="/homepage" /> : <Register />}
      />
      <Route
        path='/homepage'
        element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/questions'
        element={
          <ProtectedRoute>
            <QuestionPage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/quizEnd'
        element={
          <ProtectedRoute>
            <QuizEndPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
