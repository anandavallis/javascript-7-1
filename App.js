import { useState } from "react";

export default function ThemeToggleApp() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className="container mx-auto px-6 py-8">
        {/* Header with toggle button */}
        <header className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Theme Toggle Demo
          </h1>
          
          <button
            onClick={toggleTheme}
            className={`relative flex items-center justify-center w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 ${
              isDarkMode 
                ? 'bg-blue-600 focus:ring-blue-300' 
                : 'bg-gray-300 focus:ring-gray-200'
            }`}
            aria-label="Toggle theme"
          >
            <div className={`absolute w-6 h-6 rounded-full transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white translate-x-4' 
                : 'bg-white -translate-x-4'
            }`} />
            <span className={`absolute text-xs font-semibold transition-all duration-300 ${
              isDarkMode 
                ? 'text-white -translate-x-2' 
                : 'text-gray-600 translate-x-2'
            }`}>
              {isDarkMode ? '🌙' : '☀️'}
            </span>
          </button>
        </header>

        {/* Content sections */}
        <main className="space-y-8">
          <section className={`p-6 rounded-lg transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-200 shadow-md'
          }`}>
            <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Welcome to Theme Toggle
            </h2>
            <p className={`text-lg leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              This demo showcases a smooth theme toggle between light and dark modes. 
              The current theme is: <strong>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</strong>
            </p>
          </section>

          <section className={`p-6 rounded-lg transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-200 shadow-md'
          }`}>
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Features
            </h3>
            <ul className={`space-y-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <li>• Smooth transitions between themes</li>
              <li>• Boolean state management with React hooks</li>
              <li>• Conditional CSS class application</li>
              <li>• Accessible toggle button with focus states</li>
              <li>• Responsive design with Tailwind CSS</li>
            </ul>
          </section>

          <section className={`p-6 rounded-lg transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-200 shadow-md'
          }`}>
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Sample Content
            </h3>
            <p className={`mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Toggle the theme to see how all elements smoothly transition between light and dark modes.
            </p>
            <div className="flex gap-4">
              <button className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}>
                Primary Button
              </button>
              <button className={`px-4 py-2 rounded-md font-medium border transition-all duration-300 ${
                isDarkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                Secondary Button
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={`mt-12 pt-6 border-t transition-all duration-300 ${
          isDarkMode 
            ? 'border-gray-700 text-gray-400' 
            : 'border-gray-200 text-gray-600'
        }`}>
          <p className="text-center">
            Theme Toggle Demo - Built with React and Tailwind CSS
          </p>
        </footer>
      </div>

      <style jsx>{`
        .light-theme {
          background-color: #f8fafc;
        }
        
        .dark-theme {
          background-color: #0f172a;
        }
      `}</style>
    </div>
  );
}
