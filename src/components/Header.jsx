function Header() {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-8 mb-6">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Habit Tracker
        </h1>
        <p className="mt-2 text-base sm:text-lg text-zinc-200">
          Build healthy routines – one day at a time.
        </p>
      </div>
    </header>
  );
}

export default Header;
