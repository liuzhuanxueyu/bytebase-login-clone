import { useEffect, useState } from 'react';
import { Login } from './components/Login';
import { auth, githubProvider } from './firebase';
import { signInWithPopup, type User, signOut, onAuthStateChanged } from 'firebase/auth';

/**
 * Main App Component
 * 
 * Handles the authentication state and conditional rendering of the Login or User Profile.
 */
function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  /**
   * Initiates GitHub login popup
   */
  const handleLogin = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (err: any) {
      console.error("Login failed:", err);
      setError(err.message || "GitHub 登录失败");
    }
  };

  /**
   * Signs out the current user
   */
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err: any) {
      console.error("Logout failed:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <div className="relative inline-block">
            {user.photoURL ? (
              <img 
                src={user.photoURL} 
                alt={user.displayName || "User"} 
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-100 shadow-sm"
              />
            ) : (
              <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-indigo-100 flex items-center justify-center text-indigo-500 text-3xl font-bold">
                {user.displayName?.charAt(0) || "U"}
              </div>
            )}
            <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {user.displayName || "匿名用户"}
          </h2>
          <p className="text-gray-500 mb-6">{user.email}</p>
          
          <div className="bg-indigo-50 rounded-md p-4 mb-6 text-left">
             <h3 className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-2">用户详情</h3>
             <p className="text-sm text-gray-700 truncate"><span className="font-medium">UID:</span> {user.uid}</p>
             <p className="text-sm text-gray-700 truncate"><span className="font-medium">登录方式:</span> {user.providerData[0]?.providerId}</p>
          </div>

          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          >
            退出登录
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {error && (
        <div className="fixed top-4 right-4 bg-red-50 border-l-4 border-red-400 p-4 shadow-md z-50 max-w-sm">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">
                {error}
              </p>
            </div>
            <button onClick={() => setError(null)} className="ml-auto pl-3 text-red-500 hover:text-red-700">
                &times;
            </button>
          </div>
        </div>
      )}
      <Login onLogin={handleLogin} />
    </>
  );
}

export default App;
