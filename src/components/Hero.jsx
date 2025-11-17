import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[85vh] min-h-[540px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-white/60">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-fuchsia-800">
              Manikuku – The Sparkliest Birthday in Town!
            </h1>
            <p className="mt-4 text-fuchsia-900/80 text-lg md:text-xl">
              A magical mani-pedi experience for kids, brought to your party by Nona.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#plans" className="rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-5 py-3 shadow-lg hover:shadow-xl transition-shadow">
                See Party Plans
              </a>
              <a href="#contact" className="rounded-xl bg-white/90 text-fuchsia-800 px-5 py-3 shadow border border-fuchsia-200 hover:bg-white">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,192,203,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(221,160,221,0.25),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(152,251,152,0.25),transparent_40%)]" />
    </section>
  )
}
