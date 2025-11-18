const Header = () => (
  <header className="bg-slate-50 border-b border-slate-200 text-gray-800 py-10 px-6 shadow-sm">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extralight tracking-wide mb-1 text-gray-700">
            Gabriel del Carmen, MD
          </h1>
          <p className="text-sm text-gray-500 font-light">
            General Surgery Resident (PGY-2) — Albany Medical Center | Expected Class of 2029
          </p>
        </div>
      </div>
      <div>
        {/* Placeholder for future PDF CV integration */}
      </div>
    </div>
  </header>
);

export default Header;
