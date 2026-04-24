export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-3">Growth Central Events</h3>
            <p className="text-gray-400 text-sm">Creating Similar Interest and Business Networking Events</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-orange-500">Home</a></li>
              <li><a href="/memberships" className="hover:text-orange-500">Memberships</a></li>
              <li><a href="/the-circle" className="hover:text-orange-500">The Circle</a></li>
              <li><a href="/for-partners" className="hover:text-orange-500">For Partners</a></li>
              <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-gray-400 text-sm">Email: info@growthcentralevents.com</p>
            <p className="text-gray-400 text-sm">Phone: +91 98765 43210</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <p className="text-gray-400 text-sm">Instagram | Facebook | LinkedIn</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-sm">
          © 2026 Growth Central Events. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
