import React, { useState, useEffect } from 'react';
import { 
  useUserApi, 
  useMessageApi, 
  useGlobalLoading 
} from '../hooks/useApi';

const ApiExample = () => {
  const [activeTab, setActiveTab] = useState('user');
  const loading = useGlobalLoading();

  // 用户API示例
  const {
    login,
    getProfile,
    loginState,
    profileState
  } = useUserApi();

  // 消息API示例
  const {
    getList,
    send,
    listState,
    sendState
  } = useMessageApi();

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [newMessage, setNewMessage] = useState('');

  // 登录处理
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await login(credentials);
      console.log('登录成功:', result);
      // 登录成功后获取用户信息
      await getProfile();
    } catch (error) {
      console.error('登录失败:', error.message);
    }
  };

  // 发送消息处理
  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const result = await send({
        content: newMessage,
        recipientId: '123'
      });
      console.log('消息发送成功:', result);
      setNewMessage('');
      // 重新获取消息列表
      await getList({ limit: 10 });
    } catch (error) {
      console.error('发送消息失败:', error.message);
    }
  };

  // 获取消息列表
  useEffect(() => {
    getList({ limit: 10 });
  }, [getList]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 全局加载指示器 */}
      {loading && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
          加载中...
        </div>
      )}

      {/* 标签页导航 */}
      <div className="flex space-x-4 mb-6 border-b">
        {[
          { id: 'user', label: '用户API' },
          { id: 'message', label: '消息API' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 用户API示例 */}
      {activeTab === 'user' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">用户登录</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  用户名
                </label>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({
                    ...prev,
                    username: e.target.value
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="输入用户名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  密码
                </label>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({
                    ...prev,
                    password: e.target.value
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="输入密码"
                />
              </div>
              <button
                type="submit"
                disabled={loginState.loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loginState.loading ? '登录中...' : '登录'}
              </button>
            </form>
            
            {loginState.error && (
              <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
                错误: {loginState.error.message}
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">用户信息</h3>
            {profileState.loading ? (
              <div className="text-gray-500">加载用户信息中...</div>
            ) : profileState.error ? (
              <div className="text-red-500">加载失败: {profileState.error.message}</div>
            ) : profileState.data ? (
              <div className="space-y-2">
                <p><span className="font-medium">用户名:</span> {profileState.data.name}</p>
                <p><span className="font-medium">邮箱:</span> {profileState.data.email}</p>
                <p><span className="font-medium">ID:</span> {profileState.data.id}</p>
              </div>
            ) : (
              <button
                onClick={() => getProfile()}
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                获取用户信息
              </button>
            )}
          </div>
        </div>
      )}

      {/* 消息API示例 */}
      {activeTab === 'message' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">发送消息</h3>
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  消息内容
                </label>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="输入消息内容"
                />
              </div>
              <button
                type="submit"
                disabled={sendState.loading || !newMessage.trim()}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sendState.loading ? '发送中...' : '发送消息'}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">消息列表</h3>
            {listState.loading ? (
              <div className="text-gray-500">加载消息中...</div>
            ) : listState.error ? (
              <div className="text-red-500">加载失败: {listState.error.message}</div>
            ) : (
              <div className="space-y-3">
                {listState.data?.map(message => (
                  <div key={message.id} className="border border-gray-200 rounded-md p-4">
                    <p className="text-gray-800">{message.content}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      来自: {message.senderName} | 时间: {new Date(message.createdAt).toLocaleString()}
                    </p>
                  </div>
                )) || <p className="text-gray-500">暂无消息</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiExample;