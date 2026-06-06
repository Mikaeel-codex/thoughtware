import { FiBriefcase, FiUsers, FiAward, FiBarChart2 } from 'react-icons/fi'
import FadeIn from './FadeIn'

const stats = [
  { icon: <FiBriefcase size={32} />, value: '500+', label: 'Projects Delivered' },
  { icon: <FiUsers size={32} />, label: 'Corporate Clients', value: '50+' },
  { icon: <FiAward size={32} />, label: 'Years Experience', value: '10+' },
  { icon: <FiBarChart2 size={32} />, label: 'Client Satisfaction', value: '95%' },
]

export default function Stats() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6" style={{ marginTop: '-60px' }}>
      <FadeIn>
        <div
          className="bg-white rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-8 px-6 gap-3">
              <div style={{ color: '#dc2626' }}>{stat.icon}</div>
              <p className="text-3xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 font-medium text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
