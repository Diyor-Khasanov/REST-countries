import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Users, MapPin, Compass, Globe2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import InfoItem from '../components/InfoItem'

interface Country {
  name: { common: string }
  capital: string[]
  population: number
  region: string
  flags: { png: string }
  cca3: string
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [region, setRegion] = useState('All')
  const [loading, setLoading] = useState(true)
  const { isDark } = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,cca3')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data)
        setLoading(false)
      })
  }, [])

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesRegion = region === 'All' || country.region === region
      return matchesSearch && matchesRegion
    })
  }, [countries, searchQuery, region])

  if (loading)
    return (
      <div className='flex flex-col items-center justify-center mt-40 gap-4'>
        <Globe2 className='w-12 h-12 animate-spin text-indigo-500' />
        <p className='text-xl font-medium animate-pulse'>Mapping the world...</p>
      </div>
    )

  return (
    <div className='space-y-10 pb-20'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
        <div
          className={`relative w-full lg:max-w-md flex items-center rounded-2xl shadow-sm border transition-all duration-300 ${
            isDark
              ? 'bg-slate-800 border-slate-700 focus-within:ring-2 ring-indigo-500/50'
              : 'bg-white border-slate-200 focus-within:ring-2 ring-slate-200'
          }`}
        >
          <Search className='absolute left-4 text-slate-400 w-5 h-5' />
          <input
            type='text'
            placeholder='Search for a country...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full bg-transparent pl-12 pr-4 py-4 outline-none text-sm font-medium placeholder:text-slate-500'
          />
        </div>

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className={`w-full lg:w-64 px-6 py-4 rounded-2xl border outline-none shadow-sm cursor-pointer transition-all duration-300 appearance-none font-medium ${
            isDark
              ? 'bg-slate-800 border-slate-700 text-white focus:ring-2 ring-indigo-500'
              : 'bg-white border-slate-200 text-slate-900 focus:ring-2 ring-slate-200'
          }`}
        >
          <option value='All'>Filter by Region</option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>Americas</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>

      <p className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        Found {filteredCountries.length} countries
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {filteredCountries.map((country) => (
          <div
            key={country.cca3}
            onClick={() => navigate(`/country/${country.name.common.toLowerCase()}`)}
            className={`group cursor-pointer rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${
              isDark
                ? 'bg-slate-800/40 border-slate-700 hover:bg-slate-800'
                : 'bg-white border-slate-100 hover:border-white'
            } border`}
          >
            <div className='h-44 overflow-hidden relative'>
              <img
                src={country.flags.png}
                alt={country.name.common}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
              />
            </div>

            <div className='p-6 space-y-4'>
              <h2 className='text-lg font-bold truncate tracking-tight'>{country.name.common}</h2>

              <div className='space-y-2.5'>
                <InfoItem
                  icon={<Users size={14} />}
                  label='Population'
                  value={country.population.toLocaleString()}
                  isDark={isDark}
                />
                <InfoItem
                  icon={<Compass size={14} />}
                  label='Region'
                  value={country.region}
                  isDark={isDark}
                />
                <InfoItem
                  icon={<MapPin size={14} />}
                  label='Capital'
                  value={country.capital?.[0] || 'N/A'}
                  isDark={isDark}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
