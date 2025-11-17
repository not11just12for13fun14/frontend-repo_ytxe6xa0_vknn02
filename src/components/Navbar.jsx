import { Menu, Phone, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'plans', label: 'Our Party Plans' },
    { id: 'how', label: 'How it works' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur bg-white/60 border border-white/40 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-300 via-fuchsia-200 to-rose-300 flex items-center justify-center shadow-inner">
                <Sparkles className="h-5 w-5 text-fuchsia-700" />
              </div>
              <span className="font-extrabold tracking-tight text-fuchsia-800 text-xl">Manikuku</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="text-fuchsia-900/80 hover:text-fuchsia-900 font-medium">
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/972500000000?text=Hi%20Nona!%20We%E2%80%99d%20love%20a%20Manikuku%20party!"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-4 py-2 shadow hover:shadow-md transition-shadow"
              >
                <Phone className="h-4 w-4" /> WhatsApp Nona
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/70 border border-white shadow">
              <Menu className="h-5 w-5 text-fuchsia-800" />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/60 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className="text-fuchsia-900/80 hover:text-fuchsia-900 font-medium">
                    {item.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/972500000000?text=Hi%20Nona!%20We%E2%80%99d%20love%20a%20Manikuku%20party!"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-4 py-2 shadow hover:shadow-md transition-shadow"
                >
                  <Phone className="h-4 w-4" /> WhatsApp Nona
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
