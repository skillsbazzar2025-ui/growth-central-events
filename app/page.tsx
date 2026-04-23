export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-3">Growth Central Events</h1>
        <p className="text-xl">Creating Similar Interest and Business Networking Events</p>
        <button className="mt-6 bg-white text-orange-600 px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition">
          Join Now
        </button>
      </div>

      {/* Membership Cards */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Individual */}
        <div className="border border-orange-200 rounded-xl p-6 text-center bg-orange-50 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-orange-700">Individual</h2>
          <p className="text-3xl font-bold my-2">₹100<span className="text-base">/month</span></p>
          <p className="text-gray-600 text-sm">View & register events in your city</p>
          <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition">
            Select
          </button>
        </div>

        {/* Family */}
        <div className="border border-orange-200 rounded-xl p-6 text-center bg-orange-50 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-orange-700">Family</h2>
          <p className="text-3xl font-bold my-2">₹200<span className="text-base">/month</span></p>
          <p className="text-gray-600 text-sm">2 parents + 2 children</p>
          <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition">
            Select
          </button>
        </div>

        {/* Business */}
        <div className="border-2 border-orange-500 rounded-xl p-6 text-center bg-orange-50 relative hover:shadow-lg transition">
          <span className="absolute top-0 right-0 bg-orange-500 text-white px-2 py-1 rounded-bl-lg text-xs font-bold">
            ⭐ Popular
          </span>
          <h2 className="text-2xl font-bold text-orange-700">Business (The Circle)</h2>
          <p className="text-3xl font-bold my-2">₹500<span className="text-base">/month</span></p>
          <p className="text-gray-600 text-sm">30-40 business owners, 2 meetings/month, 1 lead/month</p>
          <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition">
            Select
          </button>
        </div>
      </div>
    </div>
  )
}
