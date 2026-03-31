const InfoItem = ({ icon, label, value, isDark }: any) => (
  <div className='flex items-center gap-3'>
    <span className='text-indigo-500 p-1.5 rounded-lg bg-indigo-500/10'>{icon}</span>
    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
      {label}: <b className={isDark ? 'text-slate-200' : 'text-slate-900'}>{value}</b>
    </span>
  </div>
)

export default InfoItem
