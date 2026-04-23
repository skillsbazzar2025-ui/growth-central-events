export default function MembershipsPage() {
  const plans = [
    {
      name: "Individual",
      price: "₹100",
      period: "/month",
      features: [
        "View all events in your city",
        "Register for events (subject to capacity)",
        "Interested categories event listing notifications",
        "Member-only event entry",
        "City-based event discovery",
        "Event booking",
      ],
      notIncluded: ["Business leads", "Circle meetings"],
      highlighted: false,
    },
    {
      name: "Family",
      price: "₹200",
      period: "/month",
      features: [
        "Everything in Individual plan",
        "Family of 4 (2 parents + 2 children) can register together",
        "Family-friendly event filtering",
        "Kids' activities & workshops (select events)",
      ],
      notIncluded: ["Business leads", "Circle meetings"],
      highlighted: false,
    },
    {
      name: "Business (The Circle)",
      price: "₹500",
      period: "/month",
      features: [
        "Category-exclusive Circle membership (30-40 members)",
        "Twice-monthly structured meetings (90 min each)",
        "Qualified business leads from other members",
        "Member directory access",
        "Cross-city referral network",
        "Hotel partnership discounts",
        "Lead tracking dashboard",
      ],
      notIncluded: [],
      highlighted: true,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-orange-700 mb-2">Membership Plans</h1>
      <p className="text-center text-gray-500 mb-10">Choose the plan that fits your needs</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 ${
              plan.highlighted ? "border-2 border-orange-500 ring-2 ring-orange-200" : "border border-gray-200"
            }`}
          >
            {plan.highlighted && (
              <div className="bg-orange-500 text-white text-center py-1 text-sm font-semibold">⭐ MOST POPULAR</div>
            )}
            <div className="bg-white p-6">
              <h2 className="text-2xl font-bold text-orange-700 mb-2">{plan.name}</h2>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500">✓</span> {feature}
                  </li>
                ))}
                {plan.notIncluded.map((missing, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400">
                    <span className="text-red-400">✗</span> {missing}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg transition">
                Select {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info: Event Capacity & Lead Mandate */}
      <div className="mt-12 bg-orange-50 rounded-xl p-6 border border-orange-200">
        <h3 className="text-xl font-bold text-orange-700 mb-3">Important Notes</h3>
        <ul className="space-y-2 text-gray-700">
          <li>📌 <strong>Event Capacity:</strong> Small events (10-20), Workshops (30-50), Large Conclaves (100-200)</li>
          <li>📌 <strong>Business Lead Mandate:</strong> 1 qualified lead/month per Business member – after 2 months of missing leads, membership suspended</li>
          <li>📌 <strong>Meeting Venue:</strong> Partner hotel/restaurant conference rooms</li>
          <li>📌 <strong>All memberships are monthly auto-debit (Razorpay)</strong></li>
        </ul>
      </div>
    </div>
  )
}
