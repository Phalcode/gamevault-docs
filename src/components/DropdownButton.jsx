import Link from "@docusaurus/Link";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";

const Dropdown = ({ className, options, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <span ref={dropdownRef} className="relative block w-full text-left">
      <Button className={className + " w-full"} {...props} onClick={toggleMenu} />

      {isOpen && (
        <div
          className="absolute right-0 z-20 mt-2 w-full origin-top-right rounded-xl bg-background-dark shadow-2xl ring-1 ring-text-default/10 backdrop-blur-xl"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-2" role="none">
            {options.map((option) => (
              <Link
                key={option.label}
                href={option.link}
                target="_blank"
                className="font-bold hover:no-underline block px-6 py-3 text-base hover:bg-background-default/50 text-text-default transition-colors"
                aria-label={option.label}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </span>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Dropdown;
