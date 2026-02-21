class ApiClient {
  constructor(baseURL, defaultHeaders = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    };
    this.requestInterceptors = [];
    this.responseInterceptors = [];
  }

  // 添加请求拦截器
  addRequestInterceptor(interceptor) {
    this.requestInterceptors.push(interceptor);
  }

  // 添加响应拦截器
  addResponseInterceptor(interceptor) {
    this.responseInterceptors.push(interceptor);
  }

  // 核心请求方法
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    // 合并配置
    const config = {
      headers: { ...this.defaultHeaders },
      ...options
    };

    // 应用请求拦截器
    for (const interceptor of this.requestInterceptors) {
      Object.assign(config, interceptor(config) || {});
    }

    try {
      const response = await fetch(url, config);
      
      // 应用响应拦截器
      let processedResponse = response;
      for (const interceptor of this.responseInterceptors) {
        processedResponse = await interceptor(processedResponse);
      }

      // 检查响应状态
      if (!processedResponse.ok) {
        throw new Error(`HTTP ${processedResponse.status}: ${processedResponse.statusText}`);
      }

      // 尝试解析JSON
      const contentType = processedResponse.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await processedResponse.json();
      }
      
      return await processedResponse.text();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // GET 请求
  get(endpoint, options = {}) {
    return this.request(endpoint, { method: 'GET', ...options });
  }

  // POST 请求
  post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options
    });
  }

  // PUT 请求
  put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options
    });
  }

  // PATCH 请求
  patch(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
      ...options
    });
  }

  // DELETE 请求
  delete(endpoint, options = {}) {
    return this.request(endpoint, { method: 'DELETE', ...options });
  }
}

export default ApiClient;