import { FiCode, FiCloud, FiBriefcase, FiBarChart2, FiSmartphone, FiSettings, FiArrowRight } from 'react-icons/fi'

const services = [
  {
    icon: <FiCode size={28} />,
    title: 'Software Development',
    description: 'Custom software solutions built for performance & scalability.',
  },
  {
    icon: <FiCloud size={28} />,
    title: 'Cloud Solutions',
    description: 'Scalable, secure and cost-effective cloud solutions.',
  },
  {
    icon: <FiBriefcase size={28} />,
    title: 'Business Analysis',
    description: 'Data-driven insights to make smarter business decisions.',
  },
  {
    icon: <FiBarChart2 size={28} />,
    title: 'IT Consulting',
    description: 'Expert guidance to optimize processes and accelerate business growth.',
  },
  {
    icon: <FiSmartphone size={28} />,
    title: 'Mobile Solutions',
    description: 'Cross platform mobile apps that engage and perform.',
  },
  {
    icon: <FiSettings size={28} />,
    title: 'Enterprise Integration',
    description: 'Seamless integration of systems and processes.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: '#f8f9fc' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-red-600 font-bold text-xs tracking-[0.25em] uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Solutions That Drive Success
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-100"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-red-600"
                style={{ background: '#fff1f1', color: '#dc2626' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#ffffff' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#dc2626' }}
              >
                <div className="group-hover:text-white" style={{ color: 'inherit' }}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 hover:gap-2.5"
                style={{ color: '#dc2626' }}
              >
                Learn More <FiArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
