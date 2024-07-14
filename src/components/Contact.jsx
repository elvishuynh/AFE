import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
        mode: "onTouched",
    });
    const formRef = useRef(null);
    const contactTitleRef = useRef(null);
    const locationRef1 = useRef(null);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset(); // Reset form fields after successful submission
        }
        
        // GSAP ScrollTrigger animation
        gsap.fromTo(formRef.current, 
            { maxHeight: 0, opacity: 0, color: "#78716C", backgroundColor: "#78716C" }, 
            {
                maxHeight: 700 , // Adjust as needed
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
            { ref: locationRef1, delay: 1.5 }
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
                alert("Form submitted successfully!");
            } else {
                alert("Submission failed: " + json.message);
            }
        })
        .catch(error => {
            console.error("Submission error:", error);
            alert("An error occurred. Please try again.");
        });
    };

    return (
        <div className="container mx-auto">
            <h1 ref={contactTitleRef} className="text-3xl sm:text-4xl md:text-5xl font-azo-sans font-bold py-8 text-center text-white">Contact Us</h1>
            <p ref={locationRef1} className="text-base sm:text-xl md:text-2xl text-center py-5">
                We believe in building lasting relationships with our customers, founded on trust, integrity, and transparent communication. Our team is always ready to answer your questions, provide expert advice, and guide you through the process of transforming your vehicle.
            </p>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-8 rounded-lg shadow-md w-9/12 mx-auto">
                <div className="form-group flex space-x-4">
                    <div className="w-1/2">
                        <label htmlFor="name" className="block text-3xl font-azo-sans text-white">Name:</label>
                        <input id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('name', { required: "Name is required" })} />
                        {errors.name && <span className="text-white font-azo-sans text-m italic">{errors.name.message}</span>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="phone" className="block text-3xl font-azo-sans text-white">Phone Number:</label>
                        <input id="phone" type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('phone', { required: "Phone number is required", pattern: { value: /^\d{10}$/, message: "Invalid phone number, must be 10 digits" } })} />
                        {errors.phone && <span className="text-white font-azo-sans text-m italic">{errors.phone.message}</span>}
                    </div>
                </div>
              <div className="form-group">
                    <label htmlFor="email" className="block text-3xl font-azo-sans text-white">Email:</label>
                    <input id="email" type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} />
                    {errors.email && <span className="text-white font-azo-sans text-m italic">{errors.email.message}</span>}
                </div>
                <div className="form-group flex space-x-4">
                    <div className="w-1/3">
                        <label htmlFor="carYear" className="block text-3xl font-azo-sans text-white">Year:</label>
                        <input id="carYear" type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('carYear', { required: "Car year is required", min: { value: 1900, message: "Year must be no earlier than 1900" }, max: { value: new Date().getFullYear(), message: "Year must be no later than this year" } })} />
                        {errors.carYear && <span className="text-white font-azo-sans text-m italic">{errors.carYear.message}</span>}
                    </div>
                    <div className="w-1/3">
                        <label htmlFor="carMake" className="block text-3xl font-azo-sans text-white">Make:</label>
                        <input id="carMake" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('carMake', { required: "Car make is required" })} />
                        {errors.carMake && <span className="text-white font-azo-sans text-m italic">{errors.carMake.message}</span>}
                    </div>
                    <div className="w-1/3">
                        <label htmlFor="carModel" className="block text-3xl font-azo-sans text-white">Model:</label>
                        <input id="carModel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('carModel', { required: "Car model is required" })} />
                        {errors.carModel && <span className="text-white font-azo-sans text-m italic">{errors.carModel.message}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="block text-3xl font-azo-sans text-white">Message:</label>
                    <textarea id="message" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('message', { required: "Message is required" })}></textarea>
                    {errors.message && <span className="text-white font-azo-sans text-m italic">{errors.message.message}</span>}
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-AFE-RED hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-AFE-RED">Send</button>
            </form>
        </div>
    );
};

export default Contact;

