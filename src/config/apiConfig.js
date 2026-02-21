// API 配置文件
const API_CONFIG = {
  // 开发环境配置
  development: {
    baseURL: 'http://localhost:3001/api',
    timeout: 10000,
    retries: 3
  },
  
  // 生产环境配置
  production: {
    baseURL: 'https://api.yourdomain.com/api',
    timeout: 5000,
    retries: 1
  },
  
  // 测试环境配置
  test: {
    baseURL: 'https://test-api.yourdomain.com/api',
    timeout: 8000,
    retries: 2
  }
};

// 获取当前环境配置
const getCurrentConfig = () => {
  const env = process.env.NODE_ENV || 'development';
  return API_CONFIG[env] || API_CONFIG.development;
};

// 默认请求头
const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
};

export { getCurrentConfig, DEFAULT_HEADERS, API_CONFIG };