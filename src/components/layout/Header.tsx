const highlights = ['Academic surgery', 'Clinical informatics', 'Health equity research'];

const Header = () => (
  <header className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
    </div>

    <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-100 backdrop-blur">
          Last updated: July 2026
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Gabriel del Carmen, MD
        </h1>
        <p className="mt-4 text-lg font-light leading-8 text-slate-200 md:text-xl">
          General Surgery Resident (PGY-3) at Albany Medical Center, expected class of 2029,
          focused on academic surgical oncology, surgical education, and clinician-built software.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span key={highlight} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-100 ring-1 ring-white/15">
              {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur md:min-w-64">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-100">Current appointment</p>
        <p className="mt-2 text-base font-medium text-white">Albany Medical Center</p>
        <p className="text-sm text-slate-300">Department of Surgery · Albany, NY</p>
      </div>
    </div>
  </header>
);

export default Header;
