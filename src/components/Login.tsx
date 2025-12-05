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
    <div className="flex min-h-screen w-full">
      {/* 左侧品牌展示区 (PC端显示) */}
      <div className="hidden md:flex md:w-1/2 bg-[#5F5AF6] items-center justify-center relative overflow-hidden">
         {/* 尝试加载您提供的官方插画风格图片 */}
         <img 
            src="https://raw.githubusercontent.com/bytebase/bytebase/main/frontend/src/assets/illustration/welcome.webp"
            alt="Bytebase Welcome" 
            className="object-cover w-full h-full"
            onError={(e) => {
              // 备用图片：如果上面的 webp 加载失败，尝试加载另一张常用的宣传图
              const target = e.currentTarget;
              if (target.src.includes('welcome.webp')) {
                  target.src = "https://bytebase.com/assets/blog/bytebase-2-0/cover.webp";
              } else {
                  // 如果都失败了，回退到纯色背景
                  target.style.display = 'none';
              }
            }}
         />
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
