import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface LoginProps {
  /** Callback function to handle login action */
  onLogin: () => void;
}

/**
 * Login Component
 * 
 * Displays the login UI, including a branded left panel (desktop) and a login form (right).
 * Currently supports GitHub login.
 * 
 * Responsive Design:
 * - Desktop: Split screen with branding on left, form on right.
 * - Mobile: Single column layout with form only.
 */
export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Branding (Desktop only)
          Hidden on mobile (md:hidden inverse), visible on medium screens and up (md:flex) */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-600 to-blue-500 items-center justify-center p-12 relative overflow-hidden">
        <div className="z-10 text-white text-center">
          <h1 className="text-4xl font-bold mb-6">Bytebase</h1>
          <p className="text-lg text-blue-100 max-w-md">
            面向开发者和 DBA 的数据库 DevSecOps 解决方案。
          </p>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Right Side - Login Form 
          Takes full width on mobile, half width on desktop */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            {/* Mobile Logo - Only visible on small screens */}
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
              {/* Placeholder for other inputs if needed */}
            </div>

            <div>
              {/* Primary Login Button (GitHub) */}
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
            
            {/* Divider */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">或使用邮箱登录</span>
                </div>
            </div>

            {/* Placeholder Email/Password Form (Disabled for this demo) */}
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

