import Link from "next/link";

export default function LandingPage(){
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full text-center space-y-6 sm:space-y-8 p-6 sm:p-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-orange-100">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs sm:text-sm font-medium">
          <span>Welcome to Cambodia Foods</span>
        </div>

        {/* Heading: Responsive Text */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Welcome to <span className="text-orange-500">Food App!</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          ស្វែងរក និងទស្សនាបញ្ជីមុខម្ហូបជាច្រើនមុខ ជាមួយព័ត៌មានលម្អិត និងរូបមន្តធ្វើម្ហូបយ៉ាងសម្បូរបែប។
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
          <Link
            href="/foods"
            className="w-full sm:w-auto px-8 py-3.5 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 transition duration-200 text-center"
          >
            មើលមុខម្ហូប - Foods
          </Link>
          
          <Link
            href="/about"
            className="w-full sm:w-auto px-8 py-3.5 bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-700 font-semibold rounded-xl transition duration-200 text-center"
          >
            អំពីពួកយើង - About Us
          </Link>
        </div>

      </div>
    </main>
  );
}