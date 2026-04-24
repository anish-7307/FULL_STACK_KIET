export default function Header() {
  return (
    <header className="bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50 sticky top-0 z-50 shadow-2xl animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse-glow hover-lift">
              <span className="text-white font-bold text-sm">🚀</span>
            </div>
            <div>
              <h1 className="gradient-text font-bold text-xl leading-none tracking-tight">DSA Tracker</h1>
              <p className="text-gray-400 text-sm mt-1">Master algorithms • Track progress • Level up</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-full px-4 py-2 shadow-lg">
              <span className="text-lg">🔥</span>
              <span className="text-emerald-300 text-sm font-semibold">7-day streak</span>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700/50 rounded-full px-4 py-2 transition-all duration-200 hover-lift focus-ring shadow-lg"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-gray-300">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span className="text-gray-300 text-sm hidden md:inline font-medium">Contribute</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}