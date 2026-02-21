import ApiClient from '../utils/apiClient';
import { getCurrentConfig, DEFAULT_HEADERS } from '../config/apiConfig';

class ApiService {
  constructor() {
    const config = getCurrentConfig();
    this.client = new ApiClient(config.baseURL, DEFAULT_HEADERS);
    
    // 添加认证拦截器
    this.setupAuthInterceptor();
    
    // 添加错误处理拦截器
    this.setupErrorInterceptor();
    
    // 添加加载状态拦截器
    this.setupLoadingInterceptor();
  }

  // 设置认证拦截器
  setupAuthInterceptor() {
    this.client.addRequestInterceptor((config) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.client.addResponseInterceptor(async (response) => {
      // 处理认证失败
      if (response.status === 401) {
        localStorage.removeItem('authToken');
        // 可以在这里触发重新登录
        window.location.href = '/login';
      }
      return response;
    });
  }

  // 设置错误处理拦截器
  setupErrorInterceptor() {
    this.client.addResponseInterceptor(async (response) => {
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const error = new Error(errorData.message || `请求失败: ${response.status}`);
        error.status = response.status;
        error.data = errorData;
        throw error;
      }
      return response;
    });
  }

  // 设置加载状态拦截器
  setupLoadingInterceptor() {
    this.client.addRequestInterceptor((config) => {
      // 显示加载状态
      this.setLoading(true);
      return config;
    });

    this.client.addResponseInterceptor(async (response) => {
      // 隐藏加载状态
      this.setLoading(false);
      return response;
    });
  }

  // 设置加载状态的方法
  setLoading(loading) {
    // 这里可以集成到全局状态管理
    if (window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('api-loading', { detail: { loading } }));
    }
  }

  // 用户相关API
  users = {
    login: (credentials) => this.client.post('/auth/login', credentials),
    register: (userData) => this.client.post('/auth/register', userData),
    getProfile: () => this.client.get('/users/profile'),
    updateProfile: (data) => this.client.put('/users/profile', data),
    logout: () => this.client.post('/auth/logout')
  };

  // 消息相关API
  messages = {
    getList: (params) => this.client.get('/messages', { params }),
    getDetail: (id) => this.client.get(`/messages/${id}`),
    send: (messageData) => this.client.post('/messages', messageData),
    delete: (id) => this.client.delete(`/messages/${id}`)
  };

  // 发现相关API
  discover = {
    getPosts: (params) => this.client.get('/discover/posts', { params }),
    getPostDetail: (id) => this.client.get(`/discover/posts/${id}`),
    createPost: (postData) => this.client.post('/discover/posts', postData),
    likePost: (id) => this.client.post(`/discover/posts/${id}/like`)
  };

  // 聊天相关API
  chat = {
    getConversations: () => this.client.get('/chat/conversations'),
    getMessages: (conversationId, params) => 
      this.client.get(`/chat/conversations/${conversationId}/messages`, { params }),
    sendMessage: (conversationId, messageData) => 
      this.client.post(`/chat/conversations/${conversationId}/messages`, messageData),
    createConversation: (participants) => 
      this.client.post('/chat/conversations', { participants })
  };

  // 通用请求方法
  request(endpoint, options) {
    return this.client.request(endpoint, options);
  }

  get(endpoint, options) {
    return this.client.get(endpoint, options);
  }

  post(endpoint, data, options) {
    return this.client.post(endpoint, data, options);
  }

  put(endpoint, data, options) {
    return this.client.put(endpoint, data, options);
  }

  delete(endpoint, options) {
    return this.client.delete(endpoint, options);
  }
}

// 创建单例实例
const apiService = new ApiService();

export default apiService;