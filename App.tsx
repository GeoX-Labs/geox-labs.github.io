
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider, useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BackgroundPage from './pages/BackgroundPage';
import DemosPage from './pages/DemosPage';
import TeamPage from './pages/TeamPage';

const AppContent: React.FC = () => {
    const { theme } = useTheme();

    React.useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/background" element={<BackgroundPage />} />
                    <Route path="/demos" element={<DemosPage />} />
                    <Route path="/team" element={<TeamPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
