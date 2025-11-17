import { Calendar, Sparkles, PartyPopper } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-fuchsia-800">How it works</h2>
          <p className="mt-3 text-fuchsia-900/80 text-lg">It’s easy to bring the sparkle</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-fuchsia-100 bg-white/70 backdrop-blur p-6 shadow-lg">
            <PartyPopper className="h-10 w-10 text-pink-500" />
            <h3 className="mt-4 text-xl font-bold text-fuchsia-900">1) Choose a plan</h3>
            <p className="text-fuchsia-900/80">Pick the party package that fits your celebration.</p>
          </div>
          <div className="rounded-3xl border border-fuchsia-100 bg-white/70 backdrop-blur p-6 shadow-lg">
            <Calendar className="h-10 w-10 text-violet-500" />
            <h3 className="mt-4 text-xl font-bold text-fuchsia-900">2) Choose a date</h3>
            <p className="text-fuchsia-900/80">Tell us when and where — home, garden, or venue.</p>
          </div>
          <div className="rounded-3xl border border-fuchsia-100 bg-white/70 backdrop-blur p-6 shadow-lg">
            <Sparkles className="h-10 w-10 text-fuchsia-500" />
            <h3 className="mt-4 text-xl font-bold text-fuchsia-900">3) Nona brings the sparkle</h3>
            <p className="text-fuchsia-900/80">We arrive with everything needed for the most magical mani-pedi party.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
