import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface LoginProps {
  // 登录回调
  onLogin: () => void;
}

// 登录页组件
// 采用左右分屏布局 (PC) / 单列布局 (Mobile)
export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="flex min-h-screen w-full font-sans">
      {/* 左侧品牌展示区 (PC端显示) */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-blue-50">
        {/* 背景图 - 选用一张明亮的抽象科技风格图片 */}
        <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" 
            alt="Abstract Background" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* 浅色遮罩，确保图片不干扰文字 */}
        <div className="absolute inset-0 bg-indigo-600/80 mix-blend-multiply"></div>
        
        {/* 内容 */}
        <div className="z-10 relative w-full h-full flex flex-col items-center justify-center p-12 text-white text-center">
          {/* 装饰性 Logo 框 */}
          <div className="mb-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
             {/* 简单的几何图形代替 Emoji，显得更专业 */}
             <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute inset-2 bg-white rounded-tr-xl rounded-bl-xl shadow-inner"></div>
             </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 drop-shadow-md tracking-wider">Bytebase</h1>
          <p className="text-lg text-blue-50 max-w-md font-medium leading-relaxed drop-shadow-sm">
            面向开发者和 DBA 的数据库 DevSecOps 解决方案
          </p>
        </div>
      </div>

      {/* 右侧登录表单 */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            {/* 移动端 Logo */}
            <h2 className="md:hidden text-3xl font-bold text-indigo-600 mb-2">Bytebase</h2>
            
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              登录您的账号
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              欢迎回来！请输入您的详细信息。
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
            </div>

            <div>
              {/* GitHub 登录按钮 */}
              <button
                onClick={onLogin}
                className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaGithub className="h-5 w-5 text-white group-hover:text-gray-300 transition-colors" />
                </span>
                使用 GitHub 登录
              </button>
            </div>
            
            {/* 分割线 */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">或使用邮箱登录</span>
                </div>
            </div>

            {/* 邮箱/密码表单 (当前仅做 UI 展示) */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        电子邮箱
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                            placeholder="请输入您的邮箱"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        密码
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                            placeholder="请输入您的密码"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        登录
                    </button>
                </div>
            </form>

          </div>
          
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Bytebase 登录系统演示.
          </p>
        </div>
      </div>
    </div>
  );
};
