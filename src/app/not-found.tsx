import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center p-8 sm:p-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-orange-100 space-y-6">      

        {/* 404 Big Heading */}
        <div className="space-y-2">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-orange-500 tracking-tight">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Page is not found
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 transition duration-200 text-center"
          >
            ត្រឡប់ទៅទំព័រដើម - Home
          </Link>
          
          <Link
            href="/foods"
            className="w-full sm:w-auto px-6 py-3.5 bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-700 font-semibold rounded-xl transition duration-200 text-center"
          >
            មើលមុខម្ហូប - Foods
          </Link>
        </div>

      </div>
    </main>
  );
}