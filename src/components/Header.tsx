import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header
      className={`w-full px-8 py-4 flex justify-between items-center transition-colors duration-500 ${
        isDark ? 'bg-[#0a1021bd] border-indigo-900' : 'bg-white border-gray-200'
      } border-b`}
    >
      <div className='text-2xl font-bold'>REST Countries</div>

      <div
        onClick={toggleTheme}
        className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
          isDark ? 'bg-[#162e6f]' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
            isDark ? 'translate-x-7' : 'translate-x-0'
          }`}
        />
      </div>
    </header>
  )
}

export default Header
