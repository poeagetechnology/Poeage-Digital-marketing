import React from 'react'

export function Careers() {
    return (
        <main className="pt-24 bg-white">
            <section className="max-w-7xl mx-auto px-6 py-24">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Careers at Poeage</h1>
                <p className="text-gray-600 max-w-2xl mb-12">
                    Join our high-performance team and shape the future of digital
                    transformation.
                </p>


                <div className="space-y-6">
                    {["Digital Marketing Manager", "SEO Specialist", "UI/UX Designer", "Content Strategist"].map(
                        (role) => (
                            <div
                                key={role}
                                className="border rounded-lg p-6 flex items-center justify-between hover:shadow transition"
                            >
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">{role}</h3>
                                    <p className="text-sm text-gray-500">Full Time • Remote</p>
                                </div>


                                <button className="bg-blue-800 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-900 transition">
                                    Apply Now
                                </button>
                            </div>
                        )
                    )}
                </div>
            </section>
        </main>
    );
}
