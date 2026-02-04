import React from "react";


export function Testimonials() {
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-gray-600">
                        What our enterprise clients say about Poeage Digital
                    </p>
                </div>


                {/* Client Logos */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20 items-center opacity-80">
                    {["Google", "Amazon", "Microsoft", "Meta", "IBM"].map((brand) => (
                        <div
                            key={brand}
                            className="text-center text-lg font-semibold text-gray-500"
                        >
                            {brand}
                        </div>
                    ))}
                </div>


                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                “Poeage Digital helped us increase qualified leads by over 200%
                                within six months. Their strategic approach is unmatched.”
                            </p>


                            <div>
                                <h4 className="font-semibold text-gray-900">Rahul Sharma</h4>
                                <span className="text-sm text-gray-500">Marketing Director</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}