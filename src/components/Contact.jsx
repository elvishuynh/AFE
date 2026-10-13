import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
        mode: "onTouched",
    });
    const [submitStatus, setSubmitStatus] = useState(null);
    const formRef = useRef(null);
    const contactTitleRef = useRef(null);
    const locationRef1 = useRef(null);
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }

        gsap.set(formRef.current, { maxHeight: 700, opacity: 1 });

        const titleSplit = new SplitText(contactTitleRef.current, { type: "chars" });
        const chars = titleSplit.chars;

        gsap.fromTo(chars, { opacity: 0, y: 20 }, {
            opacity: 1, y: 0, stagger: 0.05, duration: 0.5, ease: 'power2.out',
            scrollTrigger: {
                trigger: contactTitleRef.current,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play none none none',
                markers: false
            }
        });
    }, [isSubmitSuccessful, reset]);

    const onSubmit = async (data) => {
        setSubmitStatus('submitting');
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "5072e889-16d9-41a3-9952-a3bbe4b8ab27",
                    ...data
                }),
            });
            const json = await response.json();
            if (json.success) {
                setSubmitStatus('success');
            } else {
                setSubmitStatus('error');
                console.log(json.message);
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus('error');
        }
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Contact Auto Film Experts",
                    "description": "Get in touch with Auto Film Experts for inquiries about our automotive protection and customization services.",
                    "url": "https://autofilmsxperts.com/#contact",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "Customer Service",
                        "telephone": "+1-310-346-0336",
                        "email": "info@autofilmsxperts.com"
                    },
                    "potentialAction": {
                        "@type": "CommunicateAction",
                        "name": "Contact Form"
                    }
                })}
                </script>
            </Helmet>
            <h1 ref={contactTitleRef} className="text-5xl font-azo-sans font-bold py-8 text-center text-white">Contact Us!</h1>
            
            <div id="contact-container" className="container mx-auto px-4">
                <p id="contact-intro" className="text-gray-300 text-lg md:text-xl text-center mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
                <div id="contact-layout" className="flex flex-col lg:flex-row gap-8 justify-center items-start">
                    <div id="contact-sidebar" className="w-full lg:w-1/3 bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-2xl font-azo-sans font-bold text-white mb-6">Get in Touch</h2>
                        
                        <a href="tel:3103460336" className="block w-full bg-red-600 hover:bg-red-700 text-white font-azo-sans font-bold py-4 px-6 rounded-lg text-center transition-colors mb-4">
                            Call (310) 346-0336
                        </a>
                        
                        <div id="contact-info" className="space-y-4 text-gray-300">
                            <div>
                                <h3 className="font-semibold text-white">Email</h3>
                                <a href="mailto:info@autofilmexperts.com" className="hover:text-red-500 transition-colors">info@autofilmexperts.com</a>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Location</h3>
                                <p>San Pedro, CA</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Service Area</h3>
                                <p>Los Angeles & Surrounding Areas</p>
                            </div>
                        </div>
                        
                        <div id="contact-trust" className="mt-6 pt-4 border-t border-white/10">
                            <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="text-center text-xs text-gray-400">5-Star Rated Service</p>
                            <p className="text-center text-xs text-gray-400 mt-1">Premium Materials</p>
                        </div>
                    </div>
                    
                    <div id="contact-form-container" className="w-full lg:w-2/3">
                        {submitStatus === 'success' ? (
                            <div id="contact-success" className="bg-green-800 border border-green-600 p-8 rounded-lg text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                                <p className="text-green-100 mb-4">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                                <p className="text-green-200 text-sm">Next steps: We'll review your request and reach out to discuss your vehicle's needs.</p>
                                <button onClick={() => setSubmitStatus(null)} className="mt-6 bg-white text-green-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">Send Another Message</button>
                            </div>
                        ) : (
                            <>
                                <form id="contact-form" ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-8 rounded-lg shadow-md">
                                    <div id="form-name-group">
                                        <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-1">Name *</label>
                                        <input 
                                            id="name" 
                                            autoComplete="name"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm" 
                                            {...register('name', { required: "Name is required" })} 
                                        />
                                        {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
                                    </div>
                                    
                                    <div id="form-phone-group">
                                        <label htmlFor="phone" className="block text-base font-semibold text-gray-700 mb-1">Phone Number *</label>
                                        <input 
                                            id="phone" 
                                            type="tel" 
                                            autoComplete="tel"
                                            placeholder="(310) 346-0336"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm" 
                                            {...register('phone', { 
                                                required: "Phone number is required",
                                                pattern: { value: /^[\d\s\-\(\)]+$/, message: "Invalid phone number" }
                                            })} 
                                        />
                                        {errors.phone && <span className="text-red-600 text-sm">{errors.phone.message}</span>}
                                    </div>
                                    
                                    <div id="form-email-group">
                                        <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-1">Email</label>
                                        <input 
                                            id="email" 
                                            type="email" 
                                            autoComplete="email"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm" 
                                            {...register('email', { 
                                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                            })} 
                                        />
                                        {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                                    </div>
                                    
                                    <div id="form-service-group">
                                        <label htmlFor="service" className="block text-base font-semibold text-gray-700 mb-1">Service of Interest *</label>
                                        <select 
                                            id="service" 
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm text-gray-900"
                                            {...register('service', { required: "Please select a service" })}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="Paint Protection Film">Paint Protection Film</option>
                                            <option value="Ceramic Coating">Ceramic Coating</option>
                                            <option value="Vinyl Wrap">Vinyl Wrap</option>
                                            <option value="Window Tinting">Window Tinting</option>
                                            <option value="Brake Caliper Paint">Brake Caliper Paint</option>
                                            <option value="Paint Correction">Paint Correction</option>
                                            <option value="Stars in the Ceiling">Stars in the Ceiling</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.service && <span className="text-red-600 text-sm">{errors.service.message}</span>}
                                    </div>
                                    
                                    <div id="form-vehicle-group" className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label htmlFor="carYear" className="block text-base font-semibold text-gray-700 mb-1">Year</label>
                                            <input 
                                                id="carYear" 
                                                type="number" 
                                                autoComplete="off"
                                                placeholder="2024"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm" 
                                                {...register('carYear', { 
                                                    min: { value: 1900, message: "Invalid year" },
                                                    max: { value: new Date().getFullYear() + 1, message: "Invalid year" }
                                                })} 
                                            />
                                            {errors.carYear && <span className="text-red-600 text-sm">{errors.carYear.message}</span>}
                                        </div>
                                        <div>
                                            <label htmlFor="carMake" className="block text-base font-semibold text-gray-700 mb-1">Make</label>
                                            <input 
                                                id="carMake" 
                                                autoComplete="off"
                                                placeholder="Tesla"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm" 
                                                {...register('carMake')} 
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="carModel" className="block text-base font-semibold text-gray-700 mb-1">Model</label>
                                            <input 
                                                id="carModel" 
                                                autoComplete="off"
                                                placeholder="Model 3"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm" 
                                                {...register('carModel')} 
                                            />
                                        </div>
                                    </div>
                                    
                                    <div id="form-message-group">
                                        <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            rows="3"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                            placeholder="Tell us about your project..."
                                            {...register('message', { maxLength: { value: 500, message: "Message must be less than 500 characters" } })}
                                        />
                                        {errors.message && <span className="text-red-600 text-sm">{errors.message.message}</span>}
                                    </div>
                                    
                                    {submitStatus === 'error' && (
                                        <div id="form-error" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                            Submission failed. Please try again or call us at (310) 346-0336.
                                        </div>
                                    )}
                                    
                                    <button 
                                        type="submit" 
                                        id="form-submit"
                                        disabled={submitStatus === 'submitting'}
                                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <p ref={locationRef1} className="flex justify-center items-center text-center opacity-0 mt-10 text-gray-300 py-4 text-sm sm:text-base md:text-xl text-center">We look forward to working with you.</p>
        </>
    );
};

export default Contact;

