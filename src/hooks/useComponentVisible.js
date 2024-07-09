import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(initialIsVisible) {
	const [isComponentVisible, setIsComponentVisible] =
		useState(initialIsVisible);
	const visibleRef = useRef(null);

	const handleClickOutside = (event) => {
		if (visibleRef.current && !visibleRef.current.contains(event.target)) {
			setIsComponentVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	return { visibleRef, isComponentVisible, setIsComponentVisible };
}