export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-pink-50 via-emerald-50 to-violet-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-fuchsia-800">What is Manikuku?</h2>
            <p className="mt-4 text-fuchsia-900/80 text-lg leading-relaxed">
              Manikuku is a cheerful, sparkly mani-pedi party created just for kids. Nona brings a full mini-spa setup to your home or venue – from comfy seating and fun colors to glittery stickers and sweet music. It’s safe, age-appropriate pampering with friendly guidance so everyone feels special.
            </p>
            <p className="mt-4 text-fuchsia-900/80 text-lg leading-relaxed">
              Perfect for birthdays and special milestones, our parties are designed for smiles, giggles, and that “wow!” moment when little hands and toes shimmer with pride.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-pink-200 via-emerald-200 to-violet-200 shadow-inner" />
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-pink-300 blur-2xl opacity-60" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-lime-300 blur-2xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}
