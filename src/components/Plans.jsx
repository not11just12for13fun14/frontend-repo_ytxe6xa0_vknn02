import { Sparkles, Gift, Wand2 } from 'lucide-react'

const plans = [
  {
    name: 'Mini Sparkle',
    time: '1.5 hours',
    desc: 'Quick nail polish, glitter stickers, and a small gift',
    price: '350₪',
    icon: Gift,
    gradient: 'from-pink-400 to-rose-400',
  },
  {
    name: 'Deluxe Glam',
    time: '2 hours',
    desc: 'Full manicure & pedicure with mini massage and decorations',
    price: '500₪',
    icon: Sparkles,
    gradient: 'from-fuchsia-400 to-pink-400',
  },
  {
    name: 'Ultimate Queen',
    time: '3 hours',
    desc: 'Complete spa setup, polish, massage, and nail art station',
    price: '700₪',
    icon: Wand2,
    gradient: 'from-violet-400 to-fuchsia-400',
  },
]

export default function Plans() {
  return (
    <section id="plans" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-fuchsia-800">Our Party Plans</h2>
          <p className="mt-3 text-fuchsia-900/80 text-lg">Choose the perfect sparkle for your celebration</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map(({ name, time, desc, price, icon: Icon, gradient }) => (
            <div key={name} className="rounded-3xl border border-fuchsia-100 bg-white/70 backdrop-blur p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-md`}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-fuchsia-900">{name}</h3>
              <p className="text-fuchsia-900/70">{time}</p>
              <p className="mt-3 text-fuchsia-900/80">{desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-extrabold text-fuchsia-800">{price}</span>
                <a href="#contact" className="rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-4 py-2 shadow hover:shadow-md">
                  Book this
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
