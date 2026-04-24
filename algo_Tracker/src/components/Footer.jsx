export default function Footer() {
  return (
    <footer className="glass border-t border-gray-800/50 mt-auto animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white font-bold text-lg">🚀</span>
            </div>
            <div>
              <span className="text-white font-semibold text-lg">Keep grinding</span>
              <p className="text-gray-400 text-sm mt-1">Consistency beats talent • Every. Single. Day.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-200 hover-lift px-3 py-2 rounded-lg hover:bg-orange-500/10"
            >
              <span className="text-lg">🧩</span>
              <span className="font-medium">LeetCode</span>
            </a>
            <a
              href="https://www.geeksforgeeks.org"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-200 hover-lift px-3 py-2 rounded-lg hover:bg-green-500/10"
            >
              <span className="text-lg">🌱</span>
              <span className="font-medium">GFG</span>
            </a>
            <a
              href="https://codeforces.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 hover-lift px-3 py-2 rounded-lg hover:bg-blue-500/10"
            >
              <span className="text-lg">⚔️</span>
              <span className="font-medium">Codeforces</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
            <span className="text-gray-500 text-sm">© {new Date().getFullYear()} DSA Tracker</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800/50 text-center">
          <p className="text-gray-500 text-sm">
            Built with ❤️ for the coding community •
            <span className="text-indigo-400 ml-1">Happy Coding! 🎉</span>
          </p>
        </div>
      </div>
    </footer>
  );
}