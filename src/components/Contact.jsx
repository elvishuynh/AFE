import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import useCharacterCount from '../hooks/useCharacterCount';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
        mode: "onTouched",
    });
    const formRef = useRef(null);
    const contactTitleRef = useRef(null);
    const descriptionRef1 = useRef(null);
    const descriptionRef2 = useRef(null);
    const descriptionRef3 = useRef(null);
    const descriptionRef4 = useRef(null);
    const locationRef1 = useRef(null);
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const iconRef = useRef(null);
    const { characterCount, handleChange } = useCharacterCount(200);
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset(); // Reset form fields after successful submission
        }

        // GSAP ScrollTrigger animation
        gsap.fromTo(formRef.current,
            { maxHeight: 0, opacity: 0, color: "#78716C", backgroundColor: "#78716C" },
            {
                maxHeight: 700, // Adjust as needed
                opacity: 1,
                color: "#71717A",
                backgroundColor: "#71717A",
                duration: 2,
                ease: "circ.out",
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    markers: false
                }
            }
        );
        const triggers = [
            { ref: descriptionRef1, delay: .25 },
            { ref: descriptionRef2, delay: .25 },
            { ref: descriptionRef3, delay: .25 },
            { ref: descriptionRef4, delay: .25 },
            { ref: locationRef1, delay: .45 },
            { ref: imageRef1, delay: .5 },
            { ref: imageRef2, delay: .75 },
            { ref: iconRef, delay: .75 }
        ];
        triggers.forEach(({ ref, delay }) => {
            gsap.fromTo(ref.current, { opacity: 0, y: -20 }, {
                opacity: 1, y: 0, duration: 1, delay,
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none none none',
                    markers: false
                }
            });
        });

        const titleSplit = new SplitText(contactTitleRef.current, { type: "chars" });
        const chars = titleSplit.chars; // Array of characters

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
        console.log(data); // You can remove this line if you don't need to log form data
        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "5072e889-16d9-41a3-9952-a3bbe4b8ab27",
                ...data
            }),
        })
            .then(response => response.json())
            .then(json => {
                if (json.success) {
                    alert("Thank you for sending your message. We will get back to you shortly!");
                } else {
                    alert("Contact form submission failed: Please contact Web Administrator.");
                    console.log(json.message);
                }
            })
            .catch(error => {
                console.error("Submission error:", error);
                alert("An error occurred. Please try again.");
            });
    };

    return (
        <div id="contact" className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-48 border-t border-white/10">
            <div id="contact-description" className="my-16">
                <h1 ref={contactTitleRef} className="text-3xl sm:text-4xl md:text-5xl font-azo-sans font-bold py-8 text-center text-white">Contact Us</h1>
            </div>
            <div className="mx-auto px-8 max-w-screen-2xl text-center">
                <p ref={descriptionRef1} className="text-gray-300 text-sm sm:text-base md:text-xl text-center pb-12 xl:pb-24">
                    We believe in building lasting relationships with our customers, founded on trust, integrity, and transparent communication.
                </p>
                <div className="lg:gap-y-16 flex flex-col gap-y-8">
                    <dl className="md:grid-cols-2 lg:gap-36 text-lg grid grid-cols-1 gap-12">
                        <div id="wrap">
                            <div className="w-full overflow-hidden rounded-lg h-full">
                                <img ref={imageRef1} src="/image3.webp" alt="Interior Coating" className="min-w-full min-h-full h-auto object-cover object-center" />
                            </div>
                        </div>
                        <div id="headlight">
                            <div className="w-full overflow-hidden rounded-lg h-full">
                                <img ref={imageRef2} src="/shop2.webp" alt="Exterior Coating" className="min-w-full min-h-full h-auto object-cover object-center" />
                            </div>
                        </div>
                    </dl>
                </div>
                <p ref={descriptionRef2} className="text-gray-300 text-sm sm:text-base md:text-xl text-center py-12 xl:pb-24">
                    Our team is always ready to answer your questions, provide expert advice, and guide you through the process of transforming your vehicle.
                </p>
                <p ref={descriptionRef3} className="text-gray-300 text-sm sm:text-base md:text-xl text-center">
                    Please fill out the form below with your information and inquiry.  A representative will be in touch with you shortly.
                </p>
                <span className="flex justify-center items-center text-center">
                    <svg ref={iconRef} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-telephone-fill mr-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                    <p ref={descriptionRef4} className="text-gray-300 py-4 my-16 text-sm sm:text-base md:text-xl text-center">
                        (310) 346-0336
                    </p>
                </span>
            </div>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-8 rounded-lg shadow-md w-9/12 mx-auto">
                <div className="form-group flex space-x-4">
                    <div className="w-1/2">
                        <label htmlFor="name" className="block text-base sm:text-xl md:text-2xl font-azo-sans text-white">Name:</label>
                        <input id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('name', { required: "Name is required" })} />
                        {errors.name && <span className="text-red-300 font-azo-sans text-m italic">{errors.name.message}</span>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="phone" className="block text-base sm:text-xl md:text-2xl font-azo-sans text-white">Phone Number:</label>
                        <input id="phone" type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('phone', { required: "Phone number is required", pattern: { value: /^\d{10}$/, message: "Invalid phone number, must be 10 digits" } })} />
                        {errors.phone && <span className="text-red-300 font-azo-sans text-m italic">{errors.phone.message}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="block text-base sm:text-xl md:text-2xl font-azo-sans text-white">Email:</label>
                    <input id="email" type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} />
                    {errors.email && <span className="text-red-300 font-azo-sans text-m italic">{errors.email.message}</span>}
                </div>
                <div className="form-group flex space-x-4">
                    <div className="w-1/4">
                        <label htmlFor="carYear" className="block text-base sm:text-xl md:text-2xl font-azo-sans text-white">Year:</label>
                        <input id="carYear" type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('carYear', { required: "Car year is required", min: { value: 1900, message: "Year must be no earlier than 1900" }, max: { value: new Date().getFullYear(), message: "Year must be no later than this year" } })} />
                        {errors.carYear && <span className="text-red-300 font-azo-sans text-m italic">{errors.carYear.message}</span>}
                    </div>
                    <div className="w-1/4">
                        <label htmlFor="carMake" className="block text-base sm:text-xl md:text-2xl font-azo-sans text-white">Make:</label>
                        <input id="carMake" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('carMake', { required: "Car make is required" })} />
                        {errors.carMake && <span className="text-red-300 font-azo-sans text-m italic">{errors.carMake.message}</span>}
                    </div>
                    <div className="w-1/4">
                        <label htmlFor="carModel" className="block text-base sm:text-xl md:text-2xl font-azo-sans text-white">Model:</label>
                        <input id="carModel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('carModel', { required: "Car model is required" })} />
                        {errors.carModel && <span className="text-red-300 font-azo-sans text-m italic">{errors.carModel.message}</span>}
                    </div>
                    <div className="w-1/4">
                        <label htmlFor="carColor" className="block text-base sm:text-xl md:text-2xl font-azo-sans text-white">Color:</label>
                        <input id="carColor" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('carColor', { required: "Car color is required" })} />
                        {errors.carColor && <span className="text-red-300 font-azo-sans text-m italic">{errors.carColor.message}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="block text-base sm:text-xl md:text-2xl font-azo-sans text-white">Message:</label>
                    <textarea
                        id="message"
                        className="mt-1 block h-48 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register('message', { required: "Message is required", maxLength: { value: 200, message: "Message must be less than 200 characters" } })}
                        onChange={handleChange}
                    />
                    {errors.message && <span className="text-red-300 font-azo-sans text-m italic">{errors.message.message}</span>}
                    <div className="text-right">
                        <span className="text-gray-300 text-sm">{characterCount}</span>
                    </div>
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-AFE-RED hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-AFE-RED">Send</button>
            </form>
            <p ref={locationRef1} className="flex justify-center items-center text-center opacity-0 mt-10 text-gray-300 py-4 text-sm sm:text-base md:text-xl text-center">We look forward to working with you.</p>
        </div>
    );
};

export default Contact;

