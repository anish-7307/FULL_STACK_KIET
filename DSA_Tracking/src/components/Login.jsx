import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = (role) => {
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }
    login(username, role);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">DSA Tracker</h1>
            <p className="text-gray-300">Track your coding journey</p>
          </div>

          {/* Username Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-200 mb-3">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              placeholder="Enter your username"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-200"
              onKeyPress={(e) => e.key === "Enter" && selectedRole && handleLogin(selectedRole)}
            />
          </div>

          {/* Role Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-200 mb-4">
              Select Your Role
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Student Role */}
              <button
                onClick={() => setSelectedRole("student")}
                className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedRole === "student"
                    ? "border-green-500 bg-green-500/20 shadow-lg shadow-green-500/30"
                    : "border-white/20 bg-white/10 hover:border-green-400/50"
                }`}
              >
                <div className="text-3xl mb-2">👨‍🎓</div>
                <p className="font-semibold text-white text-sm">Student</p>
                <p className="text-xs text-gray-400 mt-1">View & solve questions</p>
              </button>

              {/* Admin Role */}
              <button
                onClick={() => setSelectedRole("admin")}
                className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedRole === "admin"
                    ? "border-orange-500 bg-orange-500/20 shadow-lg shadow-orange-500/30"
                    : "border-white/20 bg-white/10 hover:border-orange-400/50"
                }`}
              >
                <div className="text-3xl mb-2">🔐</div>
                <p className="font-semibold text-white text-sm">Admin</p>
                <p className="text-xs text-gray-400 mt-1">Manage questions</p>
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {/* Login Button */}
          <button
            onClick={() => selectedRole && handleLogin(selectedRole)}
            disabled={!selectedRole || !username.trim()}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
          >
            Continue as {selectedRole === "student" ? "Student" : selectedRole === "admin" ? "Admin" : "User"}
          </button>

          {/* Footer */}
          <p className="text-center text-gray-400 text-xs mt-8">
            Welcome to DSA Tracker • Start your learning journey today
          </p>
        </div>
      </div>
    </div>
  );
}
