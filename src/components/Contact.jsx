import { useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', plan: 'Mini Sparkle', message: '' })
  const [sent, setSent] = useState(false)

  const waText = encodeURIComponent(
    `Hi Nona! I'm ${form.name}.
Plan: ${form.plan}
Date: ${form.date}
Phone: ${form.phone}
Message: ${form.message}`
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now just show success state and open WhatsApp prefilled
    window.open(`https://wa.me/972500000000?text=${waText}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-fuchsia-800">Contact Nona</h2>
            <p className="mt-3 text-fuchsia-900/80 text-lg">Have questions or ready to book? Send a WhatsApp or fill out the form.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`https://wa.me/972500000000?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-white px-5 py-3 shadow hover:shadow-md w-fit"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Nona
              </a>
              <div className="inline-flex items-center gap-3 text-fuchsia-900/80">
                <Phone className="h-5 w-5" /> <span>Phone: 050-000-0000</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-fuchsia-100 bg-white/70 backdrop-blur p-6 shadow-lg">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-fuchsia-900/80">Parent name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-fuchsia-200 bg-white/90 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-fuchsia-900/80">Phone</label>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-fuchsia-200 bg-white/90 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                  placeholder="050-123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-fuchsia-900/80">Preferred date</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-fuchsia-200 bg-white/90 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-fuchsia-900/80">Plan</label>
                <select
                  value={form.plan}
                  onChange={(e) => setForm({ ...form, plan: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-fuchsia-200 bg-white/90 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                >
                  <option>Mini Sparkle</option>
                  <option>Deluxe Glam</option>
                  <option>Ultimate Queen</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-fuchsia-900/80">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-fuchsia-200 bg-white/90 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                  placeholder="Tell us about your event"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-5 py-3 shadow hover:shadow-md"
            >
              Send & Open WhatsApp
            </button>
            {sent && (
              <p className="mt-3 text-sm text-emerald-700">Thanks! A WhatsApp window has opened. Nona will get back to you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
