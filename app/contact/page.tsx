'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-orange-700 mb-2">Contact Us</h1>
      <p className="text-center text-gray-500 mb-10">We'd love to hear from you</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div><span className="font-semibold">📍 Address:</span> 123 Business Hub, Mumbai - 400001</div>
            <div><span className="font-semibold">📞 Phone:</span> +91 98765 43210</div>
            <div><span className="font-semibold">✉️ Email:</span> info@growthcentralevents.com</div>
            <div><span className="font-semibold">⏰ Hours:</span> Mon-Fri, 10am – 6pm</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border shadow-sm">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">Send a Message</h2>
          {submitted && <div className="bg-green-100 p-2 rounded mb-3">Thank you! We'll reply soon.</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-3 border rounded-lg" />
            <textarea rows={4} placeholder="Your Message" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-3 border rounded-lg"></textarea>
            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
