// API 系统入口文件
// 统一导出所有API相关功能

// 核心客户端
export { default as ApiClient } from '../utils/apiClient';

// 服务实例
export { default as apiService } from '../services/apiService';

// React Hooks
export {
  useApi,
  useUserApi,
  useMessageApi,
  useDiscoverApi,
  useChatApi,
  useGlobalLoading
} from '../hooks/useApi';

// 配置
export { getCurrentConfig, DEFAULT_HEADERS } from '../config/apiConfig';

// 类型定义（如果需要TypeScript支持）
export const API_TYPES = {
  USER: 'user',
  MESSAGE: 'message',
  DISCOVER: 'discover',
  CHAT: 'chat'
};