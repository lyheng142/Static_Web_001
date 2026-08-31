export function AboutUsComponent(){
    return(
        <>
  <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div className="lg:col-span-6 space-y-6">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
        A <span className="text-blue-600">place</span> We{" "}
        <span className="text-rose-500">can find khmer dilicious food </span>
      </h1>
      <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
        Khmer food offers a rich blend of fragrant herbs, subtle spices, and
        fresh ingredients, perfectly balancing sweet, sour, salty, and bitter
        flavors in signature dishes like Fish Amok and Beef Lok Lak.
      </p>
    </div>
    <div className="lg:col-span-6">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
        <img
          src="https://i.pinimg.com/1200x/9c/48/5d/9c485d8dc315c67ccd5d4e833dd25a58.jpg"
          alt="Team collaborating"
          className="w-full h-full sm:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
      </div>
    </div>
  </section>
  <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div className="lg:col-span-6">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
        <img
          src="https://i.pinimg.com/1200x/e0/7b/a4/e07ba44c3dee101827eb87e3dc06bd79.jpg"
          alt="Team collaborating"
          className="w-full h-80 sm:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
      </div>
    </div>
    <div className="lg:col-span-6 space-y-6">
      <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
        Khmer desserts are a celebrated part of Cambodian cuisine, known for
        their subtle sweetness, rich textures, and fragrant natural ingredients
        like coconut milk, palm sugar, sticky rice,
      </p>
    </div>
  </section>
  <section className="space-y-8">
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 underline decoration-slate-300 underline-offset-8">
        Our Mentor
      </h2>
    </div>
    {/* Updated: Removed grid-cols-2 and added flex justify-center */}
    <div className="flex justify-center max-w-2xl mx-auto">
      <div className="bg-slate-100/70 rounded-2xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow max-w-xs w-full">
        <img
          src="https://user28356.na.imgto.link/public/20260831/mentor01.avif"
          alt="Sokcheat Srorng"
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-md"
        />
        <h3 className="font-bold text-lg text-slate-900">Sokcheat Srorng</h3>
        <p className="text-slate-700 font-semibold text-sm mb-2">Mentor</p>
        <p className="text-xs text-slate-400 italic mb-4">
          Building the future, one line of code at a time
        </p>
        <div className="flex space-x-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
          >
            <i className="fa-solid fa-paper-plane" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="space-y-8">
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 underline decoration-slate-300 underline-offset-8">
        Our Member
      </h2>
    </div>
    {/* Updated: Using flex flex-wrap justify-around instead of grid */}
    <div className="flex flex-wrap justify-around gap-6">
      {/* Member 1 */}
      <div className="bg-slate-100/70 rounded-2xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow w-full sm:w-64">
        <img
          src="https://user28356.na.imgto.link/public/20260831/lyheng.avif"
          alt="Cheakching LyHeng"
          className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-white shadow-sm"
        />
        <h3 className="font-bold text-base text-slate-900">
          Cheakching LyHeng
        </h3>
        <p className="text-xs font-semibold text-slate-800">Leader</p>
        <p className="text-xs text-slate-500 mb-1">Frontend Developer</p>
        <p className="text-[10px] text-slate-400 italic mb-3">
          Shared ideas create real achievements
        </p>
        <div className="flex space-x-2">
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 text-xs transition-colors"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 text-xs transition-colors"
          >
            <i className="fa-solid fa-paper-plane" />
          </a>
        </div>
      </div>
      {/* Member 2 */}
      <div className="bg-slate-100/70 rounded-2xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow w-full sm:w-64">
        <img
          src="https://user28356.na.imgto.link/public/20260831/panha.avif"
          alt="Mongkul Keopanha"
          className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-white shadow-sm"
        />
        <h3 className="font-bold text-base text-slate-900">Mongkul Keopanha</h3>
        <p className="text-xs font-semibold text-slate-800">Member</p>
        <p className="text-xs text-slate-500 mb-1">Frontend Developer</p>
        <p className="text-[10px] text-slate-400 italic mb-3">
          Learn, create, and grow together
        </p>
        <div className="flex space-x-2">
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 text-xs transition-colors"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 text-xs transition-colors"
          >
            <i className="fa-solid fa-paper-plane" />
          </a>
        </div>
      </div>
      {/* Member 3 */}
      <div className="bg-slate-100/70 rounded-2xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow w-full sm:w-64">
        <img
          src="https://user28356.na.imgto.link/public/20260831/photo-2026-08-08-18-29-36.avif"
          alt="Neang Thana"
          className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-white shadow-sm"
        />
        <h3 className="font-bold text-base text-slate-900">Neang Thana</h3>
        <p className="text-xs font-semibold text-slate-800">Member</p>
        <p className="text-xs text-slate-500 mb-1">Frontend Developer</p>
        <p className="text-[10px] text-slate-400 italic mb-3">
          Connecting people, building solutions
        </p>
        <div className="flex space-x-2">
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 text-xs transition-colors"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 text-xs transition-colors"
          >
            <i className="fa-solid fa-paper-plane" />
          </a>
        </div>
      </div>
    </div>
  </section>
</>

    )
}