export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-canvas py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-indigo font-serif text-lg font-black text-canvas">
            P
          </div>
          <span className="font-serif text-lg tracking-tight text-ink">
            Pitch <span className="text-indigo">to</span> Published
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-ink/60">
          <a href="#" className="transition hover:text-ink">Terms</a>
          <a href="#" className="transition hover:text-ink">Privacy</a>
          <a href="#" className="transition hover:text-ink">Contact</a>
          <span>© {new Date().getFullYear()} Linkifi · All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
