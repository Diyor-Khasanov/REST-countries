import { Link } from 'react-router-dom'
import { MapPinOff, Compass, ArrowLeft, Globe2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const NotFound = () => {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center transition-colors duration-500 ${
        isDark ? 'bg-[#0b0f1a]' : 'bg-[#f8fafc]'
      }`}
    >
      <div className='relative mb-12'>
        <Compass
          className={`absolute -top-16 -left-16 w-32 h-32 opacity-10 animate-[spin_20s_linear_infinite] ${
            isDark ? 'text-slate-300' : 'text-slate-500'
          }`}
        />

        <div className='relative flex items-center justify-center gap-6'>
          <Globe2
            className={`w-24 h-24 md:w-32 md:h-32 animate-[pulse_4s_ease-in-out_infinite] ${
              isDark ? 'text-indigo-950' : 'text-indigo-100'
            }`}
          />

          <div className='relative'>
            <h1
              className={`text-9xl md:text-[160px] font-extrabold tracking-tighter leading-none ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              40<span className='text-indigo-500'>4</span>
            </h1>
            <MapPinOff className='absolute -top-6 -right-8 w-12 h-12 text-rose-500 animate-[bounce_2s_ease-in-out_infinite]' />
          </div>
        </div>
      </div>

      <div className='max-w-2xl space-y-5'>
        <h2
          className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}
        >
          Terra Incognita: Region Not Found
        </h2>

        <p
          className={`text-xl md:text-2xl font-light leading-relaxed mx-auto max-w-lg ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Even the best cartographers can't find this page. It seems the country you are looking for
          has been moved or never existed on our application.
        </p>
      </div>

      <div className='mt-16'>
        <Link
          to='/'
          className={`group flex items-center gap-3 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
            isDark
              ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_10px_30px_-5px_rgba(79,70,229,0.6)] hover:shadow-[0_15px_40px_-5px_rgba(79,70,229,0.7)]'
              : 'bg-slate-950 hover:bg-slate-800 text-white shadow-2xl hover:shadow-slate-500/50'
          }`}
        >
          <ArrowLeft className='w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1' />
          Back to Global Explorations
        </Link>
      </div>
    </div>
  )
}

export default NotFound
