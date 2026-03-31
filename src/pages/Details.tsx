import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Globe, Users, Landmark, Map, MapPin, Coins, Languages } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

interface CountryData {
  name: { common: string; official: string; nativeName?: any }
  population: number
  region: string
  subregion: string
  capital: string[]
  tld: string[]
  currencies: any
  languages: any
  flags: { svg: string }
}

const Details = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const { isDark } = useTheme()
  const [country, setCountry] = useState<CountryData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [name])

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-[60vh]'>
        <div className='w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin'></div>
      </div>
    )

  if (!country) return <div className='text-center py-20 text-2xl'>Country not found.</div>

  const nativeName = country.name.nativeName
    ? (Object.values(country.name.nativeName)[0] as any)
    : null

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c: any) => `${c.name} (${c.symbol})`)
        .join(', ')
    : 'N/A'

  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A'

  return (
    <div className='max-w-7xl mx-auto py-10 px-4'>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className={`flex items-center gap-2 px-6 py-2.5 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 mb-12 ${
          isDark
            ? 'bg-slate-800 text-white hover:bg-slate-700'
            : 'bg-white text-slate-900 hover:bg-slate-50'
        }`}
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      <div className='grid lg:grid-cols-2 gap-16 items-center'>
        {/* Flag Section */}
        <div className='relative group'>
          <div className='absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000'></div>
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className='relative w-full rounded-2xl shadow-2xl object-cover transform transition duration-500 group-hover:scale-[1.02]'
          />
        </div>

        {/* Details Section */}
        <div className='space-y-8'>
          <div>
            <h1 className='text-5xl font-black tracking-tight mb-2'>{country.name.common}</h1>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {country.name.official}
            </p>
          </div>

          <div className='grid sm:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <DetailRow
                icon={<Landmark />}
                label='Native Name'
                value={nativeName?.common || country.name.common}
                isDark={isDark}
              />
              <DetailRow
                icon={<Users />}
                label='Population'
                value={country.population.toLocaleString()}
                isDark={isDark}
              />
              <DetailRow icon={<Globe />} label='Region' value={country.region} isDark={isDark} />
              <DetailRow
                icon={<Map />}
                label='Sub Region'
                value={country.subregion}
                isDark={isDark}
              />
              <DetailRow
                icon={<MapPin />}
                label='Capital'
                value={country.capital?.[0] || 'N/A'}
                isDark={isDark}
              />
            </div>

            <div className='space-y-4'>
              <DetailRow
                icon={<Globe />}
                label='Top Level Domain'
                value={country.tld?.[0]}
                isDark={isDark}
              />
              <DetailRow icon={<Coins />} label='Currencies' value={currencies} isDark={isDark} />
              <DetailRow icon={<Languages />} label='Languages' value={languages} isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper Component for Details
const DetailRow = ({ icon, label, value, isDark }: any) => (
  <div className='flex items-start gap-3'>
    <div className='mt-1 text-indigo-500'>
      {icon && <span className='[&>svg]:w-5 [&>svg]:h-5'>{icon}</span>}
    </div>
    <div className='flex flex-col'>
      <span
        className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
      >
        {label}
      </span>
      <span className='text-base font-medium'>{value}</span>
    </div>
  </div>
)

export default Details
