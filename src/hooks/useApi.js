import { useState, useCallback, useEffect } from 'react';
import apiService from '../services/apiService';

// 通用API Hook
export const useApi = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction, ...dependencies]);

  return { data, loading, error, execute };
};

// 特定业务的Hooks
export const useUserApi = () => {
  const login = useApi(apiService.users.login);
  const register = useApi(apiService.users.register);
  const getProfile = useApi(apiService.users.getProfile);
  const updateProfile = useApi(apiService.users.updateProfile);
  const logout = useApi(apiService.users.logout);

  return {
    login: login.execute,
    register: register.execute,
    getProfile: getProfile.execute,
    updateProfile: updateProfile.execute,
    logout: logout.execute,
    loginState: login,
    registerState: register,
    profileState: getProfile,
    updateProfileState: updateProfile,
    logoutState: logout
  };
};

export const useMessageApi = () => {
  const getList = useApi(apiService.messages.getList);
  const getDetail = useApi(apiService.messages.getDetail);
  const send = useApi(apiService.messages.send);
  const deleteMsg = useApi(apiService.messages.delete);

  return {
    getList: getList.execute,
    getDetail: getDetail.execute,
    send: send.execute,
    delete: deleteMsg.execute,
    listState: getList,
    detailState: getDetail,
    sendState: send,
    deleteState: deleteMsg
  };
};

export const useDiscoverApi = () => {
  const getPosts = useApi(apiService.discover.getPosts);
  const getPostDetail = useApi(apiService.discover.getPostDetail);
  const createPost = useApi(apiService.discover.createPost);
  const likePost = useApi(apiService.discover.likePost);

  return {
    getPosts: getPosts.execute,
    getPostDetail: getPostDetail.execute,
    createPost: createPost.execute,
    likePost: likePost.execute,
    postsState: getPosts,
    postDetailState: getPostDetail,
    createPostState: createPost,
    likePostState: likePost
  };
};

export const useChatApi = () => {
  const getConversations = useApi(apiService.chat.getConversations);
  const getMessages = useApi(apiService.chat.getMessages);
  const sendMessage = useApi(apiService.chat.sendMessage);
  const createConversation = useApi(apiService.chat.createConversation);

  return {
    getConversations: getConversations.execute,
    getMessages: getMessages.execute,
    sendMessage: sendMessage.execute,
    createConversation: createConversation.execute,
    conversationsState: getConversations,
    messagesState: getMessages,
    sendMessageState: sendMessage,
    createConversationState: createConversation
  };
};

// 全局加载状态Hook
export const useGlobalLoading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleLoading = (event) => {
      setLoading(event.detail.loading);
    };

    window.addEventListener('api-loading', handleLoading);
    return () => window.removeEventListener('api-loading', handleLoading);
  }, []);

  return loading;
};