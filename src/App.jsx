import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import MainLayout from './components/MainLayout';
import HomeContent from './components/HomeContent';
import DiscoverContent from './components/DiscoverContent';
import MessagesContent from './components/MessagesContent';
import ProfileContent from './components/ProfileContent';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <Routes>
        {/* 默认路由 - 根据登录状态重定向 */}
        <Route 
          path="/" 
          element={
            isLoggedIn ? 
              <Navigate to="/home" replace /> : 
              <Navigate to="/login" replace />
          } 
        />
        
        {/* 登录页面 - 如果已登录则重定向到首页 */}
        <Route 
          path="/login" 
          element={
            isLoggedIn ? 
              <Navigate to="/home" replace /> : 
              <Login />
          } 
        />
        
        {/* 受保护的主路由 - 包含顶部和底部导航 */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          {/* 二级路由 - 底部导航对应的内容页面 */}
          <Route path="home" element={<HomeContent />} />
          <Route path="discover" element={<DiscoverContent />} />
          <Route path="messages" element={<MessagesContent />} />
          <Route path="profile" element={<ProfileContent />} />
          
          {/* 默认子路由重定向到首页 */}
          <Route index element={<Navigate to="/home" replace />} />
        </Route>
        
        {/* 404 页面重定向到登录 */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;