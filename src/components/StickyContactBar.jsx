import { FaPhone, FaEnvelope, FaQuoteLeft } from 'react-icons/fa';

const StickyContactBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-800 md:hidden">
            <div className="flex justify-around items-center py-3">
                <a
                    href="tel:3103460336"
                    className="flex flex-col items-center text-white hover:text-red-500 transition-colors"
                >
                    <FaPhone className="text-xl mb-1" />
                    <span className="text-xs font-semibold">Call</span>
                </a>
                <a
                    href="mailto:info@autofilmexperts.com"
                    className="flex flex-col items-center text-white hover:text-red-500 transition-colors"
                >
                    <FaEnvelope className="text-xl mb-1" />
                    <span className="text-xs font-semibold">Text or Email</span>
                </a>
                <a
                    href="/contact"
                    className="flex flex-col items-center text-white hover:text-red-500 transition-colors"
                >
                    <FaQuoteLeft className="text-xl mb-1" />
                    <span className="text-xs font-semibold">Get Quote</span>
                </a>
            </div>
        </div>
    );
};

export default StickyContactBar;
