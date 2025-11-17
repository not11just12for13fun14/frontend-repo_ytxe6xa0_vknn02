export default function Footer() {
  return (
    <footer className="py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-fuchsia-900/70">© {new Date().getFullYear()} Manikuku — All rights reserved.</p>
          <a href="#hero" className="text-fuchsia-800 font-medium">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
