import React from 'react';

const ServiceContactCard = () => {
    return (
        <div className="bg-gray-800 border border-white/10 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Get Your Quote</h3>
            <div className="space-y-4">
                <a href="tel:3103460336" className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors">
                    Call (310) 346-0336
                </a>
                <a href="/contact" className="block w-full bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors">
                    Request Quote Form
                </a>
                <div className="pt-4 border-t border-white/10 space-y-2 text-sm text-gray-300">
                    <p><span className="text-white font-semibold">Location:</span> San Pedro, CA</p>
                    <p><span className="text-white font-semibold">Service Area:</span> Los Angeles & Surrounding Areas</p>
                    <p><span className="text-white font-semibold">Email:</span> info@autofilmexperts.com</p>
                </div>
                <div className="pt-3 border-t border-white/10 text-xs text-gray-400 space-y-1">
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-yellow-400">★</span> 5-Star Rated Service
                    </div>
                    <p className="text-center">Premium Materials • Professional Installation</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceContactCard;
