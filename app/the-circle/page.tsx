export default function TheCirclePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-orange-700 mb-2">The Circle</h1>
      <p className="text-center text-gray-500 mb-8">Premium Business Networking for Non‑Competitive Professionals</p>

      {/* Circle Structure */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">📐 Circle Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><span className="font-semibold">Members per Circle:</span> 30–40 business owners</div>
          <div><span className="font-semibold">Exclusivity:</span> One member per profession per Circle</div>
          <div><span className="font-semibold">Business Standing:</span> Minimum 1 year of operations</div>
          <div><span className="font-semibold">Meeting Frequency:</span> Twice per month (fortnightly)</div>
          <div><span className="font-semibold">Meeting Duration:</span> 90 minutes</div>
          <div><span className="font-semibold">Venue:</span> Partner hotel/restaurant conference room</div>
        </div>
      </div>

      {/* Lead Mandate */}
      <div className="bg-orange-50 rounded-xl border border-orange-200 p-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">🎯 Lead Generation Mandate</h2>
        <div className="space-y-3">
          <p><strong>Monthly Lead Requirement:</strong> 1 qualified business lead per member</p>
          <p><strong>Qualified Lead Definition:</strong> A genuine business opportunity that results in a conversation between referred parties</p>
          <p><strong>Tracking Method:</strong> Logged in member dashboard with proof (screenshot, email, or meeting confirmation)</p>
          <p><strong>Consequence of Non‑Compliance:</strong> After 2 consecutive months of missing leads, membership suspended</p>
          <p><strong>Lead Verification:</strong> Circle Host verifies leads at each meeting</p>
        </div>
      </div>

      {/* Meeting Agenda */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">📅 Circle Meeting Agenda (90 min)</h2>
        <div className="space-y-2">
          <p><strong>5 min</strong> – Opening & Welcome (Circle Host)</p>
          <p><strong>15 min</strong> – Educational Segment (training on referral marketing)</p>
          <p><strong>20 min</strong> – 60‑Second Introductions (each member presents business)</p>
          <p><strong>15 min</strong> – Lead Submission Review (members present their 1 lead for the month)</p>
          <p><strong>10 min</strong> – Feature Presentation (one member in‑depth, rotating)</p>
          <p><strong>15 min</strong> – Referral Sharing (announce referrals given/received)</p>
          <p><strong>10 min</strong> – Announcements & Close (upcoming events, testimonials)</p>
        </div>
      </div>

      {/* Member Benefits */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">✨ Business Member Benefits</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li>✓ Category‑exclusive Circle membership</li>
          <li>✓ Twice‑monthly structured meetings</li>
          <li>✓ Qualified business leads from other members</li>
          <li>✓ Member directory access</li>
          <li>✓ Cross‑city referral network</li>
          <li>✓ Hotel partnership discounts</li>
          <li>✓ Lead tracking dashboard</li>
          <li>✓ Priority service & availability</li>
        </ul>
      </div>
    </div>
  )
}
