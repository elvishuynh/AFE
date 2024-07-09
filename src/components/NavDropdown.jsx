import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useComponentVisible from '../hooks/useComponentVisible';

const NavDropdown = ({ title, items, isOpen, toggleDropdown, closeDropdown }) => {
  const { visibleRef, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

  return (
    <div className="relative" ref={visibleRef}>
      <div
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        className="mx-10 cursor-pointer hover:text-red-500 text-xl"
      >
        {title}
      </div>
      {isComponentVisible && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
          {items.map((item, index) => (
            <Link
              key={index}
              to={`/${title.toLowerCase()}${item.link}`}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => setIsComponentVisible(!isComponentVisible)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
