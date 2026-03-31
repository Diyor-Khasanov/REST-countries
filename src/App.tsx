import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useTheme } from './context/ThemeContext'

const App = () => {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen transition-all duration-500 ease-in-out ${
        isDark
          ? 'bg-[#0b0f1a] text-slate-200' 
          : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      <Header />

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
