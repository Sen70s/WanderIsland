# API 系统使用文档

## 目录结构

```
src/
├── utils/
│   └── apiClient.js          # API客户端核心类
├── config/
│   └── apiConfig.js          # API配置文件
├── services/
│   └── apiService.js         # API服务工厂
├── hooks/
│   └── useApi.js             # React Hooks封装
└── docs/
    └── API_USAGE.md          # 使用文档
```

## 核心功能

### 1. ApiClient 类
提供基础的HTTP请求功能，支持：
- GET、POST、PUT、PATCH、DELETE方法
- 请求/响应拦截器
- 自动JSON解析
- 错误处理

### 2. ApiService 工厂
- 环境配置管理
- 认证拦截器
- 错误处理拦截器
- 加载状态管理
- 业务API分组

### 3. React Hooks
- `useApi` - 通用API Hook
- `useUserApi` - 用户相关API
- `useMessageApi` - 消息相关API
- `useDiscoverApi` - 发现相关API
- `useChatApi` - 聊天相关API
- `useGlobalLoading` - 全局加载状态

## 使用示例

### 在组件中使用特定业务API

```jsx
import { useUserApi } from '../hooks/useApi';

function Login() {
  const { login, loginState } = useUserApi();
  
  const handleSubmit = async (credentials) => {
    try {
      const result = await login(credentials);
      console.log('登录成功:', result);
    } catch (error) {
      console.error('登录失败:', error.message);
    }
  };

  if (loginState.loading) {
    return <div>登录中...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* 表单内容 */}
    </form>
  );
}
```

### 使用通用API Hook

```jsx
import { useApi } from '../hooks/useApi';
import apiService from '../services/apiService';

function UserProfile() {
  const { data, loading, error, execute } = useApi(apiService.users.getProfile);
  
  useEffect(() => {
    execute();
  }, [execute]);

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error.message}</div>;
  
  return <div>用户名: {data?.name}</div>;
}
```

### 直接使用API服务

```jsx
import apiService from '../services/apiService';

// 在任何地方调用
const fetchData = async () => {
  try {
    const users = await apiService.users.getProfile();
    const messages = await apiService.messages.getList({ limit: 10 });
    console.log(users, messages);
  } catch (error) {
    console.error('API调用失败:', error);
  }
};
```

## 配置说明

### 环境配置
在 `src/config/apiConfig.js` 中配置不同环境的API地址：

```javascript
const API_CONFIG = {
  development: {
    baseURL: 'http://localhost:3001/api',
    timeout: 10000
  },
  production: {
    baseURL: 'https://api.yourdomain.com/api',
    timeout: 5000
  }
};
```

### 添加新的API端点

在 `src/services/apiService.js` 中扩展：

```javascript
class ApiService {
  // ... 现有代码
  
  // 新增业务模块
  products = {
    getList: (params) => this.client.get('/products', { params }),
    getDetail: (id) => this.client.get(`/products/${id}`),
    create: (data) => this.client.post('/products', data)
  };
}
```

## 拦截器功能

### 内置拦截器
1. **认证拦截器** - 自动添加Authorization头
2. **错误拦截器** - 统一错误处理
3. **加载拦截器** - 管理全局加载状态

### 自定义拦截器
```javascript
// 添加请求拦截器
apiService.client.addRequestInterceptor((config) => {
  // 修改请求配置
  config.headers['X-Custom-Header'] = 'custom-value';
  return config;
});

// 添加响应拦截器
apiService.client.addResponseInterceptor(async (response) => {
  // 处理响应数据
  const data = await response.json();
  return { ...response, customData: data };
});
```

## 最佳实践

1. **使用专用Hooks** - 优先使用业务专用的Hooks而不是通用Hook
2. **错误处理** - 始终处理API调用的错误情况
3. **加载状态** - 合理显示加载状态提升用户体验
4. **缓存策略** - 对于频繁请求的数据考虑添加缓存
5. **取消请求** - 对于可能被中断的操作实现请求取消机制

## 注意事项

- API调用会自动处理JSON序列化/反序列化
- 认证token会自动从localStorage读取
- 401错误会自动清除token并跳转到登录页
- 所有错误都会被转换为Error对象并抛出