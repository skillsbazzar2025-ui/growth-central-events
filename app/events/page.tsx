'use client'

import { useState } from 'react'

const cities = ["All", "Mumbai", "Delhi", "Bangalore", "Pune"]
const categories = ["All", "Social", "Business", "Learning", "Wellness"]

const sampleEvents = [
  { id: 1, title: "Startup Networking Meet", city: "Mumbai", category: "Business", capacity: 30, registered: 18, date: "May 10, 2026", price: "Free for Members" },
  { id: 2, title: "Yoga & Wellness Workshop", city: "Bangalore", category: "Wellness", capacity: 20, registered: 12, date: "May 12, 2026", price: "₹199" },
  { id: 3, title: "Digital Marketing Masterclass", city: "Delhi", category: "Learning", capacity: 50, registered: 35, date: "May 15, 2026", price: "₹499" },
  { id: 4, title: "Foodie’s Social Meetup", city: "Mumbai", category: "Social", capacity: 40, registered: 22, date: "May 18, 2026", price: "₹299" },
  { id: 5, title: "Business Leadership Conclave", city: "Pune", category: "Business", capacity: 100, registered: 67, date: "May 20, 2026", price: "₹999" },
  { id: 6, title: "Art & Craft Workshop", city: "Delhi", category: "Learning", capacity: 25, registered: 10, date: "May 22, 2026", price: "₹149" },
]

export default function EventsPage() {
  const [selectedCity, setSelectedCity] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredEvents = sampleEvents.filter(event => 
    (selectedCity === "All" || event.city === selectedCity) &&
    (selectedCategory === "All" || event.category === selectedCategory)
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-orange-700 mb-2">Upcoming Events</h1>
      <p className="text-center text-gray-500 mb-8">Discover events in your city</p>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <div className="flex gap-2">
          {cities.map(city => (
            <button key={city} onClick={() => setSelectedCity(city)} className={`px-4 py-1 rounded-full ${selectedCity === city ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-orange-500 hover:text-white transition`}>{city}</button>
          ))}
        </div>
        <div className="flex gap-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-1 rounded-full ${selectedCategory === cat ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-orange-500 hover:text-white transition`}>{cat}</button>
          ))}
        </div>
      </div>

      {/* Event Cards */}
      {filteredEvents.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <div key={event.id} className="border border-orange-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">
              <div className="p-5">
                <h3 className="text-xl font-bold text-orange-700">{event.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{event.date}</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p>📍 {event.city}</p>
                  <p>🏷️ {event.category}</p>
                  <p>👥 Capacity: {event.registered}/{event.capacity} booked</p>
                  <p className="font-semibold">💰 {event.price}</p>
                </div>
                <button className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition">Register</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
