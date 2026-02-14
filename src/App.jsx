import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

import Login from './components/Login';
import MainLayout from './components/MainLayout';
import Chat from './page/ChatScreen'
import PrivateChat from './components/PrivateChat';


const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // 临时展示液态玻璃效果演示
  // return <LiquidGlassDemo />;

  return (
    <Router>
      <Routes>

        <Route
          path="/" element={ isLoggedIn ? <Navigate to="/" replace /> : <Navigate to="/login" replace /> }
        />

        <Route
          path="/login" element={ isLoggedIn ? <Navigate to="/" replace /> : <Login /> }
        />

        <Route path="/" element={ <ProtectedRoute> <MainLayout /> </ProtectedRoute> } >
          <Route path='Chat' element={<Chat />}>
            <Route index element={<></>} />
            <Route path="private/:id" element={<PrivateChat />} />
          </Route>

        </Route>

        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}

      </Routes>
    </Router>
  );
};

export default App;