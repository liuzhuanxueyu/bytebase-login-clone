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
      <div className="hidden md:flex md:w-1/2 bg-[#5F5AF6] items-center justify-center relative overflow-hidden">
         {/* 使用您提供的截图作为背景图（这里使用 Bytebase 官方类似的插画资源） */}
         <img 
            // 这是一个官方类似的插画图床链接，如果显示不出来，建议将您刚才发我的截图保存到项目 public 目录本地引用
            src="https://raw.githubusercontent.com/bytebase/bytebase/main/frontend/src/assets/illustration/background_login.svg"
            alt="Bytebase Welcome" 
            className="object-cover w-full h-full"
            onError={(e) => {
                // 如果 SVG 加载失败，尝试加载另一张备用图
                e.currentTarget.src = "https://bytebase.com/assets/blog/bytebase-2-0/cover.webp";
            }}
         />
      </div>

      {/* 右侧登录表单 */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-[400px]"> {/* 调整最大宽度匹配原图 */}
          <div className="text-left mb-8"> {/* 改为左对齐 */}
            <div className="flex items-center gap-2 mb-6 justify-center"> {/* Logo 居中 */}
                {/* Bytebase Logo 图标 */}
                <img src="https://bytebase.com/logo-icon.svg" alt="Bytebase" className="w-8 h-8" />
                <span className="text-2xl font-bold text-gray-900">Bytebase</span>
            </div>
            
            <h2 className="text-[#5F5AF6] text-xl font-medium mb-1">
              Setup admin account
            </h2>
            {/* 原图没有副标题，这里留空或根据需要添加 */}
          </div>

          <div className="space-y-5"> {/* 调整间距 */}
            
            {/* 模拟原图的表单样式 */}
            <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    className="w-full px-3 py-2 bg-[#F3F4F6] border border-transparent rounded text-sm focus:outline-none focus:bg-white focus:border-[#5F5AF6] transition-colors"
                    value="chengzw258@163.com" // 模拟原图填入值
                    readOnly
                />
            </div>

            <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                    Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <input
                        type="password"
                        className="w-full px-3 py-2 bg-[#F3F4F6] border border-transparent rounded text-sm focus:outline-none focus:bg-white focus:border-[#5F5AF6] transition-colors"
                        value="......"
                        readOnly
                    />
                     <span className="absolute right-3 top-2.5 text-gray-400 text-xs cursor-pointer">
                        🚫
                     </span>
                </div>
            </div>

             <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                    Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                     <input
                        type="password"
                        className="w-full px-3 py-2 bg-[#F3F4F6] border border-transparent rounded text-sm focus:outline-none focus:bg-white focus:border-[#5F5AF6] transition-colors"
                        value="......"
                        readOnly
                    />
                    <span className="absolute right-3 top-2.5 text-gray-400 text-xs cursor-pointer">
                        🚫
                     </span>
                </div>
            </div>

             <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                    Username
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#5F5AF6]"
                    value="seven"
                    readOnly
                />
            </div>

            <div className="flex items-start gap-2 my-4">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#5F5AF6] rounded border-gray-300 focus:ring-[#5F5AF6]" defaultChecked />
                <span className="text-xs text-gray-600">
                    I accept Bytebase's <a href="#" className="text-[#5F5AF6] hover:underline">Terms of Service</a> and <a href="#" className="text-[#5F5AF6] hover:underline">Privacy Policy</a>
                </span>
            </div>

            {/* Create Account Button (模拟原图的主按钮) */}
            <button
                className="w-full py-2.5 px-4 border border-transparent rounded bg-[#5F5AF6] text-white text-sm font-medium hover:bg-[#4f4acc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5F5AF6] shadow-sm mb-4"
            >
                Create admin account
            </button>

             {/* 分割线 - 提示可以使用 GitHub 登录 */}
             <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="px-2 bg-white text-gray-400">Or sign in with</span>
                </div>
            </div>

            {/* GitHub 登录按钮 (实际功能按钮) */}
            <button
              onClick={onLogin}
              className="w-full flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              <FaGithub className="h-5 w-5 mr-2" />
              Sign in with GitHub
            </button>

          </div>
          
          <div className="mt-12 flex justify-between items-center text-xs text-gray-400">
             <span>English 简体中文</span>
             <span>&copy; 2025 Bytebase. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
