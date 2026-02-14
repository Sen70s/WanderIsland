import React from 'react';

const LiquidGlassDemo = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">液态玻璃效果演示</h1>
      
      {/* 基础液态玻璃容器 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="liquid-glass-card">
          <h3 className="text-xl font-semibold mb-3">基础卡片</h3>
          <p className="text-gray-300">这是一个带有液态玻璃效果的基础卡片组件</p>
        </div>
        
        <div className="liquid-glass-card hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-3">悬停效果</h3>
          <p className="text-gray-300">鼠标悬停时会有缩放动画效果</p>
        </div>
        
        <div className="liquid-glass-card relative overflow-hidden">
          <div className="liquid-glass-shine"></div>
          <h3 className="text-xl font-semibold mb-3">光泽效果</h3>
          <p className="text-gray-300">带有动态光泽反射效果</p>
        </div>
      </div>

      {/* 液态玻璃按钮 */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <button className="liquid-glass-btn">
          主要按钮
        </button>
        
        <button className="liquid-glass-btn bg-blue-500/20 border-blue-400/30">
          蓝色按钮
        </button>
        
        <button className="liquid-glass-btn bg-purple-500/20 border-purple-400/30">
          紫色按钮
        </button>
        
        <button className="liquid-glass-btn bg-green-500/20 border-green-400/30">
          绿色按钮
        </button>
      </div>

      {/* 不同尺寸的液态玻璃容器 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="liquid-glass liquid-glass-sm bg-red-500/20 border-red-400/30 p-4">
          <div className="liquid-glass-inner">
            <h4 className="font-semibold">小尺寸 (SM)</h4>
            <p className="text-sm text-gray-300">圆角较小的液态玻璃容器</p>
          </div>
        </div>
        
        <div className="liquid-glass liquid-glass-md bg-yellow-500/20 border-yellow-400/30 p-6">
          <div className="liquid-glass-inner">
            <h4 className="font-semibold">中等尺寸 (MD)</h4>
            <p className="text-gray-300">标准尺寸的液态玻璃容器</p>
          </div>
        </div>
        
        <div className="liquid-glass liquid-glass-lg bg-indigo-500/20 border-indigo-400/30 p-8">
          <div className="liquid-glass-inner">
            <h4 className="font-semibold">大尺寸 (LG)</h4>
            <p className="text-gray-300">较大圆角的液态玻璃容器</p>
          </div>
        </div>
        
        <div className="liquid-glass liquid-glass-xl bg-pink-500/20 border-pink-400/30 p-10">
          <div className="liquid-glass-inner">
            <h4 className="font-semibold">超大尺寸 (XL)</h4>
            <p className="text-gray-300">最大圆角的液态玻璃容器</p>
          </div>
        </div>
      </div>

      {/* 自定义组合示例 */}
      <div className="mt-12 p-8 liquid-glass-card relative overflow-hidden">
        <div className="liquid-glass-shine animate-pulse"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4">自定义组合示例</h2>
          <p className="text-gray-300 mb-6">
            这里展示了如何将不同的液态玻璃效果组合使用，
            包括基础效果、光泽动画和悬停交互。
          </p>
          <div className="flex gap-4">
            <button className="liquid-glass-btn bg-gradient-to-r from-cyan-500/30 to-blue-500/30">
              渐变按钮
            </button>
            <button className="liquid-glass-btn border-2 border-white/30">
              边框强调
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidGlassDemo;