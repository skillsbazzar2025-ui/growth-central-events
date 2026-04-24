export default function ForPartnersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-orange-700 mb-2">For Hotel & Restaurant Partners</h1>
      <p className="text-center text-gray-500 mb-8">Grow your business with Growth Central Events</p>

      {/* Benefits */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">✨ Partner Benefits</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li>✓ Listed as official venue partner on platform</li>
          <li>✓ Circle meetings hosted at your venue (free or discounted)</li>
          <li>✓ Event space bookings through platform</li>
          <li>✓ Access to member database for corporate bookings</li>
          <li>✓ Brand visibility on all event materials</li>
          <li>✓ Priority listing in venue search</li>
        </ul>
      </div>

      {/* Pricing */}
      <div className="bg-orange-50 rounded-xl border border-orange-200 p-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">💰 Partner Fee Structure</h2>
        <div className="space-y-2 text-lg">
          <p><strong>Partner Membership Fee:</strong> ₹1,000 per event</p>
          <p><strong>Commission on Event F&B:</strong> 10% of F&B revenue</p>
        </div>
        <p className="text-sm text-gray-600 mt-3">* You host the event, we bring the members. You earn from F&B and future corporate bookings.</p>
      </div>

      {/* Partner Signup Form */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">Become a Partner</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Hotel/Restaurant Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="text" placeholder="Contact Person Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="text" placeholder="City" className="w-full p-3 border border-gray-300 rounded-lg" />
          <textarea placeholder="Venue Capacity & Facilities (e.g., conference room, parking, F&B options)" rows={3} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition">Submit Application</button>
        </form>
        <p className="text-xs text-gray-400 mt-4">* Our team will contact you within 48 hours.</p>
      </div>
    </div>
  )
}
